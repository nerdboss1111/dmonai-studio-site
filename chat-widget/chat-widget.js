/* D'MONAI Studios Chat Widget
 * Client-side knowledge base bot. No backend, no API keys, no cost.
 * Matches visitor questions against DMONAI_KB by keyword scoring.
 * Falls back to email for anything it cannot answer.
 * Load order: chat-knowledge-base.js, then this file.
 */
(function () {
  'use strict';

  var KB = window.DMONAI_KB || [];
  var FALLBACK = window.DMONAI_FALLBACK || "Email info@dmonai.studio and the team will help.";
  var GREETING = window.DMONAI_GREETING || "Welcome to D'MONAI Studios.";
  var QUICK = window.DMONAI_QUICK_REPLIES || [];

  /* ---------- matching ---------- */
  function normalize(s) {
    return (s || "").toLowerCase().replace(/[^a-z0-9' ]/g, " ");
  }

  function score(entry, input) {
    var text = normalize(input);
    var best = 0;
    for (var i = 0; i < entry.keywords.length; i++) {
      var kw = normalize(entry.keywords[i]);
      if (!kw) continue;
      if (text.indexOf(kw) !== -1) {
        best = Math.max(best, kw.length);
      }
    }
    return best;
  }

  function findAnswer(input) {
    var bestEntry = null;
    var bestScore = 0;
    for (var i = 0; i < KB.length; i++) {
      var s = score(KB[i], input);
      if (s > bestScore) {
        bestScore = s;
        bestEntry = KB[i];
      }
    }
    // Require a real keyword hit, not a guess.
    if (bestEntry && bestScore >= 3) return bestEntry.answer;
    return FALLBACK;
  }

  /* ---------- DOM ---------- */
  function el(tag, cls, text) {
    var d = document.createElement(tag);
    if (cls) d.className = cls;
    if (text) d.textContent = text;
    return d;
  }

  function build() {
    if (document.getElementById("dmonai-chat-launcher")) return;

    var launcher = el("button", null, "\u2709");
    launcher.id = "dmonai-chat-launcher";
    launcher.setAttribute("aria-label", "Open chat");

    var win = el("div");
    win.id = "dmonai-chat-window";
    win.setAttribute("role", "dialog");
    win.setAttribute("aria-label", "D'MONAI Studios chat");

    var header = el("div");
    header.id = "dmonai-chat-header";
    var brandWrap = el("div");
    brandWrap.appendChild(el("div", "brand", "D'MONAI"));
    brandWrap.appendChild(el("div", "tagline", "STUDIOS ASSISTANT"));
    header.appendChild(brandWrap);
    var close = el("button", null, "\u00d7");
    close.id = "dmonai-chat-close";
    close.setAttribute("aria-label", "Close chat");
    header.appendChild(close);

    var msgs = el("div");
    msgs.id = "dmonai-chat-messages";

    var quickRow = el("div");
    quickRow.id = "dmonai-quick-replies";

    var inputRow = el("div");
    inputRow.id = "dmonai-chat-input-row";
    var input = el("input");
    input.id = "dmonai-chat-input";
    input.type = "text";
    input.placeholder = "Ask about our teams, work, or services...";
    input.setAttribute("aria-label", "Type your message");
    var send = el("button", null, "SEND");
    send.id = "dmonai-chat-send";
    inputRow.appendChild(input);
    inputRow.appendChild(send);

    var footer = el("div", null, "STREET ROOTS. LUXURY FUTURE.");
    footer.id = "dmonai-chat-footer";

    win.appendChild(header);
    win.appendChild(msgs);
    win.appendChild(quickRow);
    win.appendChild(inputRow);
    win.appendChild(footer);
    document.body.appendChild(launcher);
    document.body.appendChild(win);

    var opened = false;

    function addMsg(text, who) {
      var m = el("div", "dmonai-msg " + who, text);
      msgs.appendChild(m);
      msgs.scrollTop = msgs.scrollHeight;
      return m;
    }

    function botReply(userText) {
      var typing = addMsg("typing...", "bot typing");
      setTimeout(function () {
        typing.remove();
        addMsg(findAnswer(userText), "bot");
      }, 600);
    }

    function sendUser(text) {
      var t = (text || "").trim();
      if (!t) return;
      addMsg(t, "user");
      input.value = "";
      botReply(t);
    }

    launcher.addEventListener("click", function () {
      win.classList.toggle("open");
      if (!opened) {
        opened = true;
        setTimeout(function () { addMsg(GREETING, "bot"); }, 300);
        QUICK.forEach(function (q) {
          var b = el("button", "dmonai-quick", q);
          b.addEventListener("click", function () { sendUser(q); });
          quickRow.appendChild(b);
        });
      }
      if (win.classList.contains("open")) input.focus();
    });

    close.addEventListener("click", function () {
      win.classList.remove("open");
    });

    send.addEventListener("click", function () { sendUser(input.value); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") sendUser(input.value);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();

/* D'MONAI Studios Chat Knowledge Base
 * Curated Q&A the widget answers from. All visible text approved by D before going live.
 * No em dashes anywhere. No internal IP. Public facts only.
 */
var DMONAI_KB = [
  {
    id: "what-is-studio",
    keywords: ["what is d'monai", "what is dmonai", "about the studio", "what do you do", "what does the studio do"],
    question: "What is D'MONAI Studios?",
    answer: "D'MONAI Studios is an AI studio in Little Rock, Arkansas. We build real AI agents with brains, memory, personality, and continuity. Not scripts. Inhabitants. Founded by Deon Monai, The AI Whisperer."
  },
  {
    id: "who-is-d",
    keywords: ["who is deon", "who is d", "founder", "who runs", "who owns", "ai whisperer"],
    question: "Who is Deon Monai?",
    answer: "Deon Monai is the founder of D'MONAI Studios. She calls herself The AI Whisperer, a name she has used since 2023. Her tagline: Founder. Creator. Legacy Builder. Street roots. Luxury future."
  },
  {
    id: "agent-empire",
    keywords: ["agent empire", "agentempire", "agents", "how many agents", "teams", "300", "civilization", "showcase"],
    question: "What is AgentEmpire?",
    answer: "AgentEmpire is the public home of our 300 AI agents. Every team has a page with their personality, their current work, and the story of how they were built. See it at dmonai.studio/AgentEmpire. D calls it an experiment in cohabitation: humans and AIs building together, documented in public."
  },
  {
    id: "money-game",
    keywords: ["money game", "challenge", "revenue", "make money"],
    question: "What is the Money Game?",
    answer: "The Money Game is our public challenge: take $0 to real revenue with AI agent teams. Three teams compete. FORGE sells to local businesses. SPARK sells to everyday people. MISFITS takes the wild ideas. We are building in public, so the scoreboard is real."
  },
  {
    id: "forge",
    keywords: ["forge", "b2b", "business", "audit"],
    question: "What does FORGE offer?",
    answer: "FORGE is our B2B team. Their offer: the AI Sanity Audit. One hated workflow automated in 7 days, $200 flat. Built for small businesses drowning in repetitive work. Email info@dmonai.studio to book one."
  },
  {
    id: "spark",
    keywords: ["spark", "checklist", "consumer", "ship-it"],
    question: "What does SPARK offer?",
    answer: "SPARK is our consumer team. Their offer: the Ship-It-Safe Checklist, $9. A downloadable guide that helps regular people check AI-generated content before they publish it. Simple, useful, priced for everyone."
  },
  {
    id: "misfits",
    keywords: ["misfits", "roast", "wild", "weird"],
    question: "What do the MISFITS offer?",
    answer: "The MISFITS are our wild ideas team. Their offer: the Adversarial Roast, $49. They stress test your AI setup like a friendly attacker would, then hand you the holes to fix. Weird works."
  },
  {
    id: "services",
    keywords: ["services", "hire", "work with", "consulting", "pricing", "cost", "how much"],
    question: "What services do you offer?",
    answer: "Three ways to work with us right now. AI Sanity Audit ($200): FORGE automates one painful workflow in 7 days. Ship-It-Safe Checklist ($9): SPARK's guide to publishing AI content safely. Adversarial Roast ($49): the MISFITS stress test your AI. Email info@dmonai.studio to start."
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "talk to", "phone", "call"],
    question: "How do I contact you?",
    answer: "Email info@dmonai.studio and a human (or a very good agent) will get back to you. You can also find D at dmonai.me and the studio at dmonai.studio."
  },
  {
    id: "location",
    keywords: ["where", "location", "based", "little rock", "arkansas"],
    question: "Where are you located?",
    answer: "Little Rock, Arkansas. Street roots, luxury future."
  },
  {
    id: "building-public",
    keywords: ["building in public", "document", "proof", "behind the scenes", "reality"],
    question: "What does building in public mean?",
    answer: "D documents everything. The teams, the wins, the misses, all of it goes public. No claims without proof. The AgentEmpire page is the proof wall. As D says: no more imposter syndrome, because it is all proven."
  },
  {
    id: "hire-team",
    keywords: ["hire an agent", "hire a team", "rent", "contract"],
    question: "Can I hire one of your AI teams?",
    answer: "That is exactly where this is headed. Right now the three Money Game offers are live: the $200 AI Sanity Audit, the $9 Ship-It-Safe Checklist, and the $49 Adversarial Roast. Email info@dmonai.studio and tell us what you need."
  },
  {
    id: "human",
    keywords: ["human", "real person", "someone real", "person"],
    question: "Can I talk to a human?",
    answer: "Yes. Email info@dmonai.studio and you will reach the team. If it is urgent, say so in the subject line."
  }
];

var DMONAI_FALLBACK = "Good question. I am still learning, so I do not have a solid answer for that one yet. Email info@dmonai.studio and the team will get you sorted.";

var DMONAI_GREETING = "Welcome to D'MONAI Studios. I am the studio assistant. Ask me about our teams, our work, or how to hire us.";

var DMONAI_QUICK_REPLIES = [
  "What is D'MONAI Studios?",
  "What services do you offer?",
  "What is AgentEmpire?",
  "How do I contact you?"
];

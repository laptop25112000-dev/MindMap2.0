const TRAITS = {
  openness: "Openness",
  discipline: "Discipline",
  social: "Social Energy",
  empathy: "Empathy",
  stability: "Stability",
  drive: "Drive"
};

const QUESTIONS = [
  {
    text: "When things don’t go as planned, what do you usually do?",
    options: [
      { text: "Stay calm and find another solution 😌", scores: { stability: 3, discipline: 1 } },
      { text: "Feel stressed but still try to manage 😅", scores: { discipline: 2, stability: 1 } },
      { text: "Get frustrated and react quickly 😤", scores: { drive: 2, social: 1 } },
      { text: "Step away and process it alone 😶", scores: { openness: 2, stability: 1 } },
      { text: "Ask someone trusted for help 🤝", scores: { empathy: 2, social: 2 } }
    ]
  },
  {
    text: "Which environment helps you perform best?",
    options: [
      { text: "Quiet and peaceful 🌙", scores: { stability: 3, discipline: 1 } },
      { text: "Social and energetic 🎉", scores: { social: 3, drive: 1 } },
      { text: "Competitive and challenging 🏆", scores: { drive: 3, discipline: 1 } },
      { text: "Creative and flexible 🎨", scores: { openness: 3, social: 1 } },
      { text: "Organized and structured 📋", scores: { discipline: 3, stability: 1 } }
    ]
  },
  {
    text: "What motivates you most in life?",
    options: [
      { text: "Achievement and success 🏅", scores: { drive: 3, discipline: 1 } },
      { text: "Peace and happiness ☮️", scores: { stability: 3, empathy: 1 } },
      { text: "Security and stability 💰", scores: { discipline: 2, stability: 2 } },
      { text: "Learning and growth 📚", scores: { openness: 3, discipline: 1 } },
      { text: "Love and connection 💙", scores: { empathy: 3, social: 1 } }
    ]
  },
  {
    text: "When making important decisions, you mostly rely on:",
    options: [
      { text: "Logic and facts 📊", scores: { discipline: 3, stability: 1 } },
      { text: "Feelings and intuition 💫", scores: { empathy: 2, openness: 2 } },
      { text: "Advice from trusted people 🗣️", scores: { social: 2, empathy: 2 } },
      { text: "Past experience 🕰️", scores: { stability: 2, discipline: 2 } },
      { text: "The option that gives me freedom ⚡", scores: { openness: 3, drive: 1 } }
    ]
  },
  {
    text: "How do you usually handle conflict?",
    options: [
      { text: "Talk directly and solve it calmly 🤝", scores: { stability: 2, drive: 1, empathy: 1 } },
      { text: "Avoid it until things cool down 🕊️", scores: { empathy: 2, stability: 2 } },
      { text: "React emotionally at first 😤", scores: { drive: 2, social: 1 } },
      { text: "Try to make everyone feel okay 😊", scores: { social: 2, empathy: 2 } },
      { text: "Stay silent and distance myself 🌫️", scores: { openness: 2, stability: 1 } }
    ]
  },
  {
    text: "In a group, you naturally become:",
    options: [
      { text: "The leader 👑", scores: { drive: 3, social: 2 } },
      { text: "The supporter 🙌", scores: { empathy: 3, social: 1 } },
      { text: "The independent worker 🎯", scores: { discipline: 3, openness: 1 } },
      { text: "The quiet observer 👀", scores: { stability: 2, discipline: 1 } },
      { text: "The flexible adapter 🔄", scores: { openness: 2, social: 1, stability: 1 } }
    ]
  },
  {
    text: "In friendships, what role do you usually play?",
    options: [
      { text: "The fun and energetic one 😄", scores: { social: 3, openness: 1 } },
      { text: "The thoughtful advice-giver 🧠", scores: { discipline: 2, empathy: 1, stability: 1 } },
      { text: "The ambitious motivator 💪", scores: { drive: 3, social: 1 } },
      { text: "The caring emotional support 💙", scores: { empathy: 3, social: 1 } },
      { text: "The calm peacekeeper ☯️", scores: { stability: 3, empathy: 1 } }
    ]
  },
  {
    text: "Which fear affects you most?",
    options: [
      { text: "Failure 😰", scores: { drive: 2, discipline: 1 } },
      { text: "Rejection 💔", scores: { empathy: 2, social: 1 } },
      { text: "Being stuck or trapped 🧱", scores: { openness: 3, drive: 1 } },
      { text: "Losing control 😱", scores: { discipline: 2, stability: 1 } },
      { text: "Being misunderstood 🌀", scores: { social: 2, openness: 1, empathy: 1 } }
    ]
  },
  {
    text: "Your ideal life would be:",
    options: [
      { text: "Successful and respected 🏆", scores: { drive: 3, social: 1 } },
      { text: "Peaceful and balanced 🌿", scores: { stability: 3, empathy: 1 } },
      { text: "Adventurous and exciting 🚀", scores: { openness: 3, drive: 1 } },
      { text: "Financially secure and stable 🏦", scores: { discipline: 2, stability: 2 } },
      { text: "Meaningful and emotionally fulfilling 💫", scores: { empathy: 3, openness: 1 } }
    ]
  },
  {
    text: "When people misread you, it is usually because:",
    options: [
      { text: "I seem too serious, but I care 🎯", scores: { discipline: 2, empathy: 1 } },
      { text: "I seem quiet, but I notice everything 👀", scores: { stability: 2, discipline: 1 } },
      { text: "I seem confident, but I also doubt myself 💪", scores: { drive: 2, empathy: 1 } },
      { text: "I seem emotional, but I feel deeply 💙", scores: { empathy: 3, social: 1 } },
      { text: "I seem relaxed, but I avoid pressure 🌫️", scores: { openness: 2, stability: 1 } }
    ]
  },
  {
    text: "Under pressure, you usually become:",
    options: [
      { text: "More focused ⚡", scores: { discipline: 3, drive: 1 } },
      { text: "More emotional 😢", scores: { empathy: 2, social: 1 } },
      { text: "More quiet 🤐", scores: { stability: 3, discipline: 1 } },
      { text: "More aggressive or impatient 😤", scores: { drive: 3, social: 1 } },
      { text: "More dependent on others 🤝", scores: { social: 3, empathy: 1 } }
    ]
  },
  {
    text: "Which quality describes you best?",
    options: [
      { text: "Creative 🎨", scores: { openness: 3 } },
      { text: "Logical 🧠", scores: { discipline: 3 } },
      { text: "Loyal 🤝", scores: { empathy: 3 } },
      { text: "Ambitious 🚀", scores: { drive: 3 } },
      { text: "Adaptable 🔄", scores: { stability: 2, openness: 1 } }
    ]
  },
  {
    text: "What matters most to you long-term?",
    options: [
      { text: "Freedom 🦅", scores: { openness: 3, drive: 1 } },
      { text: "Stability 🏠", scores: { stability: 3, discipline: 1 } },
      { text: "Recognition 🌟", scores: { drive: 3, social: 1 } },
      { text: "Relationships 💙", scores: { empathy: 3, social: 1 } },
      { text: "Personal growth 📈", scores: { discipline: 2, openness: 2 } }
    ]
  },
  {
    text: "How do you recharge your energy?",
    options: [
      { text: "Spending time alone 🌙", scores: { stability: 3, openness: 1 } },
      { text: "Talking to friends 💬", scores: { social: 3, empathy: 1 } },
      { text: "Doing hobbies or personal projects 🎯", scores: { discipline: 2, openness: 2 } },
      { text: "Sleeping or resting 😴", scores: { empathy: 1, stability: 2 } },
      { text: "Trying new experiences 🌍", scores: { openness: 3, social: 1 } }
    ]
  },
  {
    text: "If nothing was stopping you, what would you focus on first?",
    options: [
      { text: "Explore the world 🌍", scores: { openness: 3, social: 1 } },
      { text: "Build something meaningful 🏗️", scores: { drive: 2, discipline: 1, openness: 1 } },
      { text: "Help family and friends 💙", scores: { empathy: 3, social: 1 } },
      { text: "Learn and master new things 📚", scores: { discipline: 2, openness: 2 } },
      { text: "Create a peaceful stress-free life 🌿", scores: { stability: 3, empathy: 1 } }
    ]
  }
];

const PERSONALITY_TYPES = {
  "discipline+stability": {
    name: "The Analyst",
    description: "You are careful, steady, and practical. You prefer clarity over chaos and usually make decisions after thinking through the details.",
    strengths: ["Logical problem-solving", "Reliable planning", "Calm judgement"],
    hiddenTrait: "You may care more deeply than people realize, but you show it through responsibility rather than dramatic emotion.",
    growthTip: "Avoid becoming too rigid. Leave space for creativity and emotional expression."
  },
  "drive+discipline": {
    name: "The Achiever",
    description: "You are goal-focused, hardworking, and determined. You like progress and usually push yourself to become better.",
    strengths: ["Strong ambition", "Focused execution", "Consistency under pressure"],
    hiddenTrait: "Behind your confidence, you may fear wasting your potential.",
    growthTip: "Do not measure your whole worth only through achievement. Rest is part of performance."
  },
  "empathy+stability": {
    name: "The Empath",
    description: "You are emotionally aware, caring, and grounded. People may trust you because you understand feelings without creating unnecessary drama.",
    strengths: ["Emotional understanding", "Patience", "Supportive presence"],
    hiddenTrait: "You can absorb other people’s stress even when you look calm.",
    growthTip: "Set boundaries so helping others does not drain you."
  },
  "openness+social": {
    name: "The Explorer",
    description: "You are curious, energetic, and drawn to new experiences. You learn through people, environments, and real-world discovery.",
    strengths: ["Curiosity", "Adaptability", "Social confidence"],
    hiddenTrait: "You may feel trapped when life becomes too repetitive.",
    growthTip: "Use structure to turn your ideas into finished outcomes."
  },
  "openness+discipline": {
    name: "The Creator",
    description: "You combine imagination with focus. You are not just creative — you can also build, improve, and complete meaningful things.",
    strengths: ["Original thinking", "Skill-building", "Creative discipline"],
    hiddenTrait: "You may quietly compare your work to your own high standards.",
    growthTip: "Do not wait for perfection. Publish, test, improve, repeat."
  },
  "stability+empathy": {
    name: "The Peacemaker",
    description: "You naturally reduce tension and bring emotional balance. You value peace, fairness, and people feeling safe around you.",
    strengths: ["Conflict calming", "Kindness", "Emotional maturity"],
    hiddenTrait: "You may avoid conflict so much that your own needs stay hidden.",
    growthTip: "Peace should not mean silence. Practice saying what you truly need."
  },
  "drive+social": {
    name: "The Leader",
    description: "You are energetic, influential, and action-oriented. You can motivate people and move groups toward a clear direction.",
    strengths: ["Initiative", "Influence", "Fast decision-making"],
    hiddenTrait: "You may feel pressure to look confident even when you are unsure.",
    growthTip: "Lead by listening, not only by directing."
  },
  "discipline+empathy": {
    name: "The Guardian",
    description: "You are loyal, dependable, and protective. You care about people and show it through responsibility, consistency, and support.",
    strengths: ["Loyalty", "Responsibility", "Protective care"],
    hiddenTrait: "You may quietly carry more responsibility than others notice.",
    growthTip: "Let others support you too. You do not always need to be the strong one."
  },
  "openness+stability": {
    name: "The Free Spirit",
    description: "You value freedom, peace, and self-direction. You like exploring life in your own way without unnecessary pressure.",
    strengths: ["Calm independence", "Flexible thinking", "Self-awareness"],
    hiddenTrait: "You may avoid pressure because you fear losing your inner balance.",
    growthTip: "Freedom becomes stronger when paired with small consistent habits."
  },
  "drive+openness": {
    name: "The Strategist",
    description: "You are ambitious, future-focused, and open to possibilities. You can imagine a bigger path and push yourself toward it.",
    strengths: ["Vision", "Bold thinking", "Growth mindset"],
    hiddenTrait: "You may get impatient when reality moves slower than your ideas.",
    growthTip: "Break big goals into clear steps so your vision becomes practical."
  },
  "social+empathy": {
    name: "The Connector",
    description: "You are people-oriented, warm, and emotionally responsive. You build relationships naturally and notice how others feel.",
    strengths: ["Communication", "Emotional bonding", "Team harmony"],
    hiddenTrait: "You may sometimes depend on others’ reactions to feel secure.",
    growthTip: "Stay connected, but do not lose your own identity inside relationships."
  },
  "discipline+stability_alt": {
    name: "The Realist",
    description: "You are grounded, sensible, and practical. You prefer realistic plans and stable progress over risky guesses.",
    strengths: ["Practical judgement", "Consistency", "Clear priorities"],
    hiddenTrait: "You may be more ambitious than you show, but you want proof before acting.",
    growthTip: "Take calculated risks sometimes. Safe choices are not always the strongest choices."
  }
};

const COMBO_TO_TYPE = {
  "discipline+stability": ["discipline+stability", "discipline+stability_alt"],
  "stability+discipline": ["discipline+stability", "discipline+stability_alt"],
  "drive+discipline": "drive+discipline",
  "discipline+drive": "drive+discipline",
  "empathy+stability": "empathy+stability",
  "stability+empathy": "stability+empathy",
  "openness+social": "openness+social",
  "social+openness": "openness+social",
  "openness+discipline": "openness+discipline",
  "discipline+openness": "openness+discipline",
  "drive+social": "drive+social",
  "social+drive": "drive+social",
  "discipline+empathy": "discipline+empathy",
  "empathy+discipline": "discipline+empathy",
  "openness+stability": "openness+stability",
  "stability+openness": "openness+stability",
  "drive+openness": "drive+openness",
  "openness+drive": "drive+openness",
  "social+empathy": "social+empathy",
  "empathy+social": "social+empathy"
};

const FALLBACK_TYPES = [
  "drive+openness",
  "openness+discipline",
  "social+empathy",
  "drive+social",
  "empathy+stability",
  "openness+stability",
  "discipline+empathy",
  "drive+discipline",
  "openness+social",
  "discipline+stability"
];

let answers = {};
let userName = "";

const $ = id => document.getElementById(id);
const show = id => {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
};

function renderQuestions(filter = "") {
  const wrap = $("questionsWrap");
  wrap.innerHTML = "";
  const f = filter.trim().toLowerCase();

  QUESTIONS.forEach((q, i) => {
    const haystack = `${q.text} ${q.options.map(o => o.text).join(" ")}`.toLowerCase();
    if (f && !haystack.includes(f)) return;

    const card = document.createElement("article");
    card.className = "question-card";
    card.innerHTML = `
      <div class="q-number">Question ${i + 1} of ${QUESTIONS.length}</div>
      <div class="q-text">${q.text}</div>
      <div class="options">
        ${q.options.map((o, idx) => `
          <label class="option ${answers[i] === idx ? "selected" : ""}">
            <input type="radio" name="q${i}" ${answers[i] === idx ? "checked" : ""}/>
            <span>${String.fromCharCode(65 + idx)}) ${o.text}</span>
          </label>
        `).join("")}
      </div>`;

    card.querySelectorAll(".option").forEach((label, idx) => {
      label.addEventListener("click", () => {
        answers[i] = idx;
        updateProgress();
        renderQuestions($("searchInput").value);
      });
    });

    wrap.appendChild(card);
  });

  if (!wrap.children.length) {
    wrap.innerHTML = '<p class="warning">No matching questions found. Clear the search to see all questions.</p>';
  }
}

function updateProgress() {
  const count = Object.keys(answers).length;
  $("answeredCount").textContent = count;
  $("progressFill").style.width = `${(count / QUESTIONS.length) * 100}%`;
  $("submitBtn").disabled = count !== QUESTIONS.length;
  $("warning").style.display = count === QUESTIONS.length ? "none" : "block";
}

function calculate() {
  const raw = Object.fromEntries(Object.keys(TRAITS).map(t => [t, 0]));
  const max = Object.fromEntries(Object.keys(TRAITS).map(t => [t, 0]));

  QUESTIONS.forEach((q, i) => {
    q.options.forEach(option => {
      Object.entries(option.scores).forEach(([trait, value]) => {
        max[trait] = Math.max(max[trait], value);
      });
    });

    const selected = q.options[answers[i]];
    Object.entries(selected.scores).forEach(([trait, value]) => {
      raw[trait] += value;
    });
  });

  const maxPossible = QUESTIONS.length * 3;
  const percentages = {};
  Object.keys(TRAITS).forEach(trait => {
    percentages[trait] = Math.round((raw[trait] / maxPossible) * 100);
  });

  const ranked = Object.entries(percentages).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0]);
  });

  const topTraits = ranked.slice(0, 2);
  const type = choosePersonalityType(topTraits, percentages);
  const hiddenTrait = ranked[ranked.length - 1];

  return { raw, percentages, ranked, topTraits, type, hiddenTrait };
}

function choosePersonalityType(topTraits, percentages) {
  const key = `${topTraits[0][0]}+${topTraits[1][0]}`;
  let mapped = COMBO_TO_TYPE[key];

  if (Array.isArray(mapped)) {
    const driveScore = percentages.drive || 0;
    const opennessScore = percentages.openness || 0;
    const empathyScore = percentages.empathy || 0;
    mapped = (driveScore + opennessScore > empathyScore + 10) ? mapped[1] : mapped[0];
  }

  if (mapped && PERSONALITY_TYPES[mapped]) return PERSONALITY_TYPES[mapped];

  const bestFallback = FALLBACK_TYPES
    .map(typeKey => {
      const [a, b] = typeKey.replace("_alt", "").split("+");
      return { typeKey, score: (percentages[a] || 0) + (percentages[b] || 0) };
    })
    .sort((x, y) => y.score - x.score)[0].typeKey;

  return PERSONALITY_TYPES[bestFallback];
}

function buildSummary(type, topTraits, hiddenTrait) {
  const first = TRAITS[topTraits[0][0]];
  const second = TRAITS[topTraits[1][0]];
  const hidden = TRAITS[hiddenTrait[0]];
  return `${userName}, your MindMap result is based on your strongest two traits: ${first} and ${second}. This combination matches ${type.name}. Your hidden trait is ${hidden}, which means it may be present, but it does not dominate your personality pattern right now.`;
}

function showResult() {
  const { percentages, ranked, topTraits, type, hiddenTrait } = calculate();
  const average = Math.round(Object.values(percentages).reduce((a, b) => a + b, 0) / Object.keys(percentages).length);
  const summary = buildSummary(type, topTraits, hiddenTrait);

  $("resultContent").innerHTML = `
    <div class="result-card">
      <small class="pill">${userName}'s Dynamic MindMap Profile</small>
      <div class="personality-type">${type.name}</div>
      <p>${type.description}</p>
      <p>${summary}</p>
      <div class="chips">
        ${topTraits.map(([trait, score]) => `<span class="chip">${TRAITS[trait]} · ${score}%</span>`).join("")}
      </div>
    </div>

    <div class="traits">
      <h3>Dynamic Trait Scores</h3>
      ${ranked.map(([trait, score]) => `
        <div class="trait-row">
          <div class="trait-name">${TRAITS[trait]}</div>
          <div class="trait-bg"><div class="trait-fill" style="width:${score}%"></div></div>
          <div class="trait-score">${score}%</div>
        </div>`).join("")}

      <h3>Top 2 Traits</h3>
      <div class="insight">${TRAITS[topTraits[0][0]]} + ${TRAITS[topTraits[1][0]]}</div>

      <h3>Strengths</h3>
      ${type.strengths.map(item => `<div class="insight">${item}</div>`).join("")}

      <h3>Hidden Trait</h3>
      <div class="insight">${type.hiddenTrait}</div>
      <div class="insight">Lowest current trait: ${TRAITS[hiddenTrait[0]]} (${hiddenTrait[1]}%)</div>

      <h3>Growth Tip</h3>
      <div class="insight">${type.growthTip}</div>

      <div class="insight">Overall personality intensity: ${average}/100</div>
    </div>`;

  show("resultScreen");
}

$("year").textContent = new Date().getFullYear();

$("startBtn").addEventListener("click", () => {
  const name = $("nameInput").value.trim();
  if (!name) {
    $("nameInput").focus();
    return;
  }
  userName = name;
  $("greeting").textContent = `Hey ${userName}!`;
  renderQuestions();
  updateProgress();
  show("questionScreen");
});

$("nameInput").addEventListener("keydown", e => {
  if (e.key === "Enter") $("startBtn").click();
});

$("searchInput").addEventListener("input", e => renderQuestions(e.target.value));
$("submitBtn").addEventListener("click", showResult);

$("retakeBtn").addEventListener("click", () => {
  answers = {};
  userName = "";
  $("nameInput").value = "";
  $("searchInput").value = "";
  show("nameScreen");
  window.location.hash = "quiz";
});

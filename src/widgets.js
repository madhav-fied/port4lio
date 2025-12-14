// Thought widget start

const THOUGHTS = [
    "Clarity over clever tricks",
    "Build boring, reliable systems",
    "Predictability is professional",
    "Abstractions leak, plan accordingly",
    "Sharp tools need discipline",
    "Software is never finished",
    "Simple systems fail slower",
    "Intentional design beats habit",
    "Measure before optimizing",
    "Make state explicit",
    "Complexity has a cost",
    "Fast feedback loops win",
    "Design for observability",
    "Defaults matter deeply",
    "Reliability earns trust",
    "Code should explain itself",
    "Guardrails enable velocity",
    "Failures reveal system truths",
    "Solve causes, not symptoms",
    "Stability enables innovation",
    "Elegance emerges from restraint",
    "Build once, reuse wisely",
    "Consistency over intensity",
    "Refactor relentlessly, carefully",
    "Good code ages well",
    "Minimize surprise everywhere",
    "Think twice, code once",
    "Engineering is tradeoffs",
    "Trust tests, not hope",
    "Quality is cumulative",
    "Ship small, ship often",
    "Discipline beats motivation daily",
    "Code is craft, not magic",
    "Simplicity scales, complexity breaks",
    "Build, measure, refine",
    "Correctness before cleverness",
    "Automate what repeats",
    "Readability is a feature",
    "Make it work, then right",
    "Tests buy confidence",
    "Constraints spark creativity",
    "Bugs are unpaid teachers",
    "Design for change",
    "Slow is smooth, smooth is fast",
    "Focus compounds results",
    "Documentation is silent mentorship",
    "APIs are contracts",
    "Latency is a feature",
    "Determinism over surprise",
    "Own the whole stack",
    "Failures teach faster",
    "Think in systems",
    "Code reflects thinking",
    "Edge cases define quality",
    "Less code, fewer bugs",
    "Optimizations come last",
    "Consistency builds trust",
    "Explicit beats implicit",
    "Tools serve intent",
    "Craft before speed",
]

const thoughElement = document.querySelector('#thought-widget');
console.log(thoughElement)
thoughElement.textContent = THOUGHTS[Math.floor(Math.random() * THOUGHTS.length)];

// Thought widget end

// Time widget start

// Time widget end

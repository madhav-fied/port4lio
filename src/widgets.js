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
thoughElement.textContent = THOUGHTS[Math.floor(Math.random() * THOUGHTS.length)];

// Thought widget end

// Time widget start

const computeTime = () => {
    var currentDate = new Date(),
        hours = String(currentDate.getHours()).padStart(2, '0'),
        minutes = String(currentDate.getMinutes()).padStart(2, '0'),
        seconds = String(currentDate.getSeconds()).padStart(2, '0'),
        dateString = currentDate.toDateString();
    
    const hourEle = document.querySelector('#hours');
    const minutesEle = document.querySelector('#minutes');
    const secondsEle = document.querySelector('#seconds');
    const dateEle = document.querySelector('#date-current');

    hourEle.textContent = hours;
    minutesEle.textContent = minutes;
    secondsEle.textContent = seconds;
    dateEle.textContent = dateString;
}

setInterval(() => computeTime(), 1000);

// Time widget end

// Weather widget start

import { fetchWeatherApi } from "openmeteo";

const params = {
	longitude: 78.4772,
	latitude: 17.4065,
	daily: ["sunrise", "sunset", "uv_index_max", "temperature_2m_max", "temperature_2m_min"],
	current: "temperature_2m",
	timezone: "auto",
	forecast_days: 1,
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);
const response = responses[0];
const utcOffsetSeconds = response.utcOffsetSeconds();

const current = response.current();
const daily = response.daily();
const sunrise = daily.variables(0);
const sunset = daily.variables(1);

const currentTemperature = current.variables(0).value();
const uvIndexMax = daily.variables(2).valuesArray()[0];
const [maxTemperature, minTemperature] = [
    daily.variables(3).valuesArray()[0],
    daily.variables(4).valuesArray()[0]
  ];
const sunriseTime = new Date(
  (Number(sunrise.valuesInt64(0)) + utcOffsetSeconds) * 1000
);
const sunsetTime = new Date(
  (Number(sunset.valuesInt64(0)) + utcOffsetSeconds) * 1000
);




// Weather widget end

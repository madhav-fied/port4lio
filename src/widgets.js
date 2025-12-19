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
  (Number(sunrise.valuesInt64(0))) * 1000
);
const sunsetTime = new Date(
  (Number(sunset.valuesInt64(0))) * 1000
);

const currentTemperatureEle = document.querySelector("#current-temp-value");
const uvIndexMaxEle = document.querySelector("#uv-value");
const maxTemperatureEle = document.querySelector("#max-temp");
const minTemperatureEle = document.querySelector("#min-temp");
const sunriseTimeEle = document.querySelector("#sunrise-time");
const sunsetTimeEle = document.querySelector("#sunset-time");

currentTemperatureEle.textContent = `${Math.round(currentTemperature)}°`;
maxTemperatureEle.textContent = `${Math.round(maxTemperature)}°`;
minTemperatureEle.textContent = `${Math.round(minTemperature)}°`;
sunriseTimeEle.textContent = `${String(sunriseTime.getHours()).padStart(2, '0')}:${String(sunriseTime.getMinutes()).padStart(2, '0')}`;
sunsetTimeEle.textContent = `${String(sunsetTime.getHours()).padStart(2, '0')}:${String(sunsetTime.getMinutes()).padStart(2, '0')}`;
uvIndexMaxEle.textContent = Math.round(uvIndexMax);

console.log(sunriseTime)
console.log(sunsetTime)

// Weather widget end

// Meta widget start

let clickCounter = 0;
let deviceType = '';
let browserInfo = '';
let pageReloads = 0;
let tabSwitches = 0;

document.addEventListener('click', () => {
  clickCounter++;
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    tabSwitches++;
  }
});

function getDeviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}

function getBrowserInfo() {
  const ua = navigator.userAgent;
  let browser = 'unknown';
  
  if (ua.indexOf('Firefox') > -1) {
    browser = 'firefox';
  } else if (ua.indexOf('Chrome') > -1) {
    browser = 'chrome';
  } else if (ua.indexOf('Safari') > -1) {
    browser = 'safari';
  } else if (ua.indexOf('Edge') > -1) {
    browser = 'edge';
  } else if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) {
    browser = 'IE';
  } 
  return browser;
}

deviceType = getDeviceType();
browserInfo = getBrowserInfo();
pageReloads = parseInt(sessionStorage.getItem('pageReloads') || '-1') + 1;
sessionStorage.setItem('pageReloads', pageReloads);

const deviceTypeEle = document.querySelector('#device-id');
const browserTypeEle = document.querySelector('#browser-id');
const clickCounterEle = document.querySelector('#click-counter');
const pageReloadsEle = document.querySelector('#page-reloads');
const tabSwitchesEle = document.querySelector('#tab-leaves');

console.log(deviceType, browserInfo, pageReloads, clickCounter, tabSwitches);

setInterval(() => {
  deviceTypeEle.textContent = deviceType;
  browserTypeEle.textContent = browserInfo;
  clickCounterEle.textContent = clickCounter;
  pageReloadsEle.textContent = pageReloads;
  tabSwitchesEle.textContent = tabSwitches;
}, 1000);

// Meta widget end

async function getWeatherData({
    latitude = 17.4065,
    longitude = 78.4772
  } = {}) {
    const url = new URL("https://api.open-meteo.com/v1/forecast");
  
    url.searchParams.set("latitude", latitude);
    url.searchParams.set("longitude", longitude);
    url.searchParams.set(
      "current",
      "temperature_2m,wind_speed_10m"
    );
    url.searchParams.set(
      "hourly",
      "temperature_2m,relative_humidity_2m,wind_speed_10m"
    );
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      throw error;
    }
  }

  getWeatherData().then((data) => {
    console.log(data);
  })
  
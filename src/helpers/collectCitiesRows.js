import { API_KEY, BASE_URL } from "../constants/constants";

export const collectCitiesRows = (cities, setWeather) => {
  setWeather([]);
  cities.forEach((city) => {
    fetch(`${BASE_URL}?city=${city}&key=${API_KEY}`)
      .then((response) => response.json())
      .then(({ data = [] }) =>
        setWeather((prev) => [
          ...prev,
          {
            id: Date.now(),
            city: data[0]?.city_name,
            country: data[0]?.country_code,
            request_time: data[0]?.ob_time,
            weather_description: {
              description: data[0]?.weather?.description,
              icon:
                data[0]?.weather?.icon &&
                `https://www.weatherbit.io/static/img/icons/${data[0]?.weather?.icon}.png`,
            },
          },
        ])
      );
  });
};

import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "a546fa311c1dd689f40e0f58a8bbd425";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "imperial",
      APPID: API_KEY,
    },
  });
  return data;
};

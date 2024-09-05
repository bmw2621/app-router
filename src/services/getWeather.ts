import { WeatherForecast } from "@/typedefs/weather";
import shapeWeatherData from "@/utils/shapeWeatherData";
import ky from "ky";

/**
 * Types
 */
export type WeatherApiResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: "GMT";
  timezone_abbreviation: "GMT";
  elevation: number;
  current_units: {
    time: "unixtime";
    interval: "seconds";
    temperature_2m: "°F";
    relative_humidity_2m: "%";
    apparent_temperature: "°F";
    is_day: "";
    precipitation: "inch";
    rain: "inch";
    showers: "inch";
    snowfall: "inch";
    weather_code: "wmo code";
    cloud_cover: "%";
    wind_speed_10m: "mp/h";
  };
  current: {
    time: number;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: 0 | 1;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    weather_code: number;
    cloud_cover: number;
    wind_speed_10m: number;
  };
  hourly_units: { time: "unixtime"; visibility: "ft" };
  hourly: {
    time: number[];
    visibility: number[];
  };
  daily_units: {
    time: "unixtime";
    weather_code: "wmo code";
    temperature_2m_max: "°F";
    temperature_2m_min: "°F";
    apparent_temperature_max: "°F";
    apparent_temperature_min: "°F";
    precipitation_probability_max: "%";
  };
  daily: {
    time: number[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    precipitation_probability_max: number[];
  };
};

/**
 * Constants
 */
const params = {
  current: [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
    "is_day",
    "precipitation",
    "rain",
    "showers",
    "snowfall",
    "weather_code",
    "cloud_cover",
    "wind_speed_10m",
  ],
  hourly: "visibility",
  daily: [
    "weather_code",
    "temperature_2m_max",
    "temperature_2m_min",
    "apparent_temperature_max",
    "apparent_temperature_min",
    "precipitation_probability_max",
  ],
  temperature_unit: "fahrenheit",
  wind_speed_unit: "mph",
  precipitation_unit: "inch",
  timeformat: "unixtime",
  models: "gfs_seamless",
};

/**
 * Service
 */
const getWeather = async (
  latitude: number,
  longitude: number,
): Promise<WeatherForecast> => {
  const baseUrl = "https://api.open-meteo.com/v1/forecast";
  try {
    const searchParams = new URLSearchParams(
      JSON.parse(
        JSON.stringify({
          ...params,
          latitude,
          longitude,
        }),
      ),
    );

    const data = await ky
      .get<WeatherApiResponse>(baseUrl, { searchParams })
      .json();

    return shapeWeatherData(data);
  } catch (e) {
    console.error(e);
    return Promise.reject();
  }
};

export default getWeather;

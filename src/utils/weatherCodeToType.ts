import { WeatherType } from "@/typedefs/weather";

const weatherCodeToType = (code: number, temp = 0): WeatherType => {
  switch (true) {
    case code >= 0 && code <= 5:
      if (temp > 90) return WeatherType.Hot;
      return WeatherType.Sunny;
    case code >= 6 && code <= 19:
      return WeatherType.Cloudy;
    case code >= 20 && code <= 29:
      return WeatherType.Rainy;
    case code >= 30 && code <= 35:
      return WeatherType.Cloudy;
    case code >= 36 && code <= 39:
      return WeatherType.Cold;
    case code >= 40 && code <= 49:
      return WeatherType.Cloudy;
    case code >= 50 && code <= 69:
      return WeatherType.Rainy;
    case code >= 70 && code <= 79:
      return WeatherType.Cold;
    case code >= 80 && code <= 99:
      return WeatherType.Rainy;
    default:
      return WeatherType.Sunny;
  }
};

export default weatherCodeToType;

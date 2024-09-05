import { Description } from "@/constants";
import { WeatherApiResponse } from "@/services/getWeather";
import { WeatherForecast } from "@/typedefs/weather";
import { fromUnixTime } from "date-fns";

/**
 * Helper
 */
export const codeToDescription = new Map<number, Description>([
  [0, Description.NoClouds],
  [1, Description.SomeClouds],
  [2, Description.NoChange],
  [3, Description.PartlyCloudy],
  [4, Description.VisibilityReduced],
  [5, Description.Haze],
  [6, Description.WidespreadDust],
  [7, Description.DustSand],
  [8, Description.DustSand],
  [9, Description.DustSand],
  [10, Description.Mist],
  [11, Description.Patches],
  [12, Description.ContinuousRain],
  [13, Description.LightningStorm],
  [14, Description.Rain],
  [15, Description.Rain],
  [16, Description.Rain],
  [17, Description.Thunderstorm],
  [18, Description.Squalls],
  [19, Description.FunnelCloud],
  [20, Description.Drizzle],
  [21, Description.Rain],
  [22, Description.Snow],
  [23, Description.RainSnow],
  [24, Description.FreezingRain],
  [25, Description.Showers],
  [26, Description.Snow],
  [27, Description.Hail],
  [28, Description.Fog],
  [29, Description.Thunderstorm],
  [30, Description.DustSandStorm],
  [31, Description.DustSandStorm],
  [32, Description.DustSandStorm],
  [33, Description.DustSandStorm],
  [34, Description.DustSandStorm],
  [35, Description.DustSandStorm],
  [36, Description.Snow],
  [37, Description.HeavySnow],
  [38, Description.Snow],
  [39, Description.HeavySnow],
  [40, Description.Fog],
  [41, Description.Fog],
  [42, Description.Fog],
  [43, Description.Fog],
  [44, Description.Fog],
  [45, Description.Fog],
  [46, Description.Fog],
  [47, Description.Fog],
  [48, Description.Fog],
  [49, Description.Fog],
  [50, Description.Drizzle],
  [51, Description.Drizzle],
  [52, Description.Drizzle],
  [53, Description.Drizzle],
  [54, Description.Drizzle],
  [55, Description.Drizzle],
  [56, Description.Drizzle],
  [57, Description.Drizzle],
  [58, Description.Drizzle],
  [59, Description.Drizzle],
  [60, Description.Rain],
  [61, Description.Rain],
  [62, Description.Rain],
  [63, Description.Rain],
  [64, Description.Rain],
  [65, Description.Rain],
  [66, Description.FreezingRain],
  [67, Description.FreezingRain],
  [68, Description.RainSnow],
  [69, Description.RainSnow],
  [70, Description.Snow],
  [71, Description.Snow],
  [72, Description.Snow],
  [73, Description.Snow],
  [74, Description.Snow],
  [75, Description.Snow],
  [76, Description.Snow],
  [77, Description.Snow],
  [78, Description.Snow],
  [79, Description.IcePellets],
  [80, Description.Rain],
  [81, Description.Rain],
  [82, Description.Rain],
  [83, Description.Rain],
  [84, Description.Rain],
  [85, Description.Snow],
  [86, Description.Snow],
  [87, Description.Snow],
  [88, Description.Snow],
  [89, Description.Hail],
  [90, Description.Hail],
  [91, Description.Rain],
  [92, Description.Rain],
  [93, Description.Rain],
  [94, Description.Snow],
  [95, Description.Thunderstorm],
  [96, Description.Thunderstorm],
  [97, Description.Thunderstorm],
  [98, Description.Thunderstorm],
  [99, Description.Thunderstorm],
]);

// API does can not be configured to return miles as a unit for visibility
const ftToMiles = (ft?: number): number => {
  if (!ft) return 0;
  return Math.round((ft / 5280) * 10) / 10;
};
/**
 * Util
 */
const shapeWeatherData = ({
  current,
  current_units,
  hourly,
  daily = {
    time: [],
    weather_code: [],
    temperature_2m_max: [],
    temperature_2m_min: [],
    apparent_temperature_max: [],
    apparent_temperature_min: [],
    precipitation_probability_max: [],
  },
  daily_units,
}: Partial<WeatherApiResponse>): WeatherForecast => {
  return {
    current: {
      temp: current?.temperature_2m || 0,
      tempUnit: current_units?.temperature_2m || "°F",
      description:
        codeToDescription.get(current?.weather_code || 999) || "Uncertain",
      asOf: current ? fromUnixTime(current?.time) : new Date(),
      feelsLike: current?.apparent_temperature || 0,
      windSpeed:
        `${current?.wind_speed_10m || "---"} ${current_units?.wind_speed_10m || ""}`.trim(),
      visibility: `${ftToMiles(hourly?.visibility[0])} mi`,
      weatherCode: current?.weather_code || 999,
    },
    forecast: daily.time.map((time, i) => {
      const date = fromUnixTime(time);
      return {
        date,
        weatherCode: daily?.weather_code?.[i] || 999,
        tempUnit: daily_units?.temperature_2m_max || "°F",
        temp: {
          max: daily.temperature_2m_max?.[i] || 0,
          min: daily.temperature_2m_min?.[i] || 0,
        },
        feelsLike: {
          max: daily.apparent_temperature_max?.[i] || 0,
          min: daily.apparent_temperature_min?.[i] || 0,
        },
        description:
          codeToDescription.get(daily.weather_code?.[i]) || "Uncertain",
      };
    }),
  };
};

export default shapeWeatherData;

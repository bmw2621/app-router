import { WeatherCurrent } from "@/typedefs/weather";
import weatherCodeToType from "@/utils/weatherCodeToType";
import { format } from "date-fns";
import { FC } from "react";
import WeatherIcon from "../WeatherIcon";
import styles from "./currentWeather.module.css";

/**
 * Types
 */
type Props = {
  location: string;
  weather: WeatherCurrent;
};
/**
 * Component
 */
const CurrentWeather: FC<Props> = ({
  location,
  weather: {
    weatherCode,
    temp,
    tempUnit,
    description,
    asOf,
    feelsLike,
    visibility,
    windSpeed,
  },
}) => {
  return (
    <section className={styles.currentForecast}>
      <WeatherIcon isLarge weather={weatherCodeToType(weatherCode, temp)} />
      <div>
        <h1>{location}</h1>
        <div className={styles.temp}>
          {temp}
          <sup style={{ fontWeight: 200, fontSize: 70 }}>{tempUnit}</sup>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.updated}>
          {`updated ${format(asOf, "h:mm aaa")}`}
        </div>
        <div className={styles.stats}>
          {[
            `Feels Like ${feelsLike} ${tempUnit}`,
            `Wind ${windSpeed}`,
            `Visibility ${visibility}`,
          ].map((stat) => (
            <div key={stat}>{stat}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;

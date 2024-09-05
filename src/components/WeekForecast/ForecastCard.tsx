import { WeatherFuture } from "@/typedefs/weather";
import weatherCodeToType from "@/utils/weatherCodeToType";
import { format } from "date-fns";
import { FC } from "react";
import WeatherIcon from "../WeatherIcon";
import styles from "./forecast.module.css";

/**
 * Types
 */
type Props = {
  day: WeatherFuture;
};
/**
 * Component
 */
const ForecastCard: FC<Props> = ({ day }) => {
  return (
    <article className={styles.card}>
      <div className={styles.date}>
        <span style={{ fontWeight: "bold" }}>{format(day.date, "eeee")}</span>
        <span>{format(day.date, "do")}</span>
      </div>
      <WeatherIcon weather={weatherCodeToType(day.weatherCode, day.temp.max)} />
      <div className={styles.temp}>
        {day.temp.max}
        <sup>{day.tempUnit}</sup>
      </div>
      <div className={styles.description}>{day.description}</div>
    </article>
  );
};

export default ForecastCard;

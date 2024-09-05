import { WeatherFuture } from "@/typedefs/weather";
import { FC } from "react";
import styles from "./forecast.module.css";
import ForecastCard from "./ForecastCard";

/**
 * Type
 */
type Props = {
  forecast: WeatherFuture[];
};
/**
 * Component
 */
const WeekForecast: FC<Props> = ({ forecast }) => {
  return (
    <section className={styles.container}>
      <h3>Daily Forecast</h3>
      <div className={styles.days}>
        {forecast.map((day, i) => (
          <ForecastCard
            key={day.date.toISOString()}
            day={day}
            delay={i * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default WeekForecast;

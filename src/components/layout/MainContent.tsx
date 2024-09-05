import { WeatherForecast } from "@/typedefs/weather";
import { FC } from "react";
import CurrentWeather from "../CurrentWeather";
import WeekForecast from "../WeekForecast";
import styles from "./main.module.css";
/**
 * Types
 */
type Props = {
  forecast?: WeatherForecast;
  location?: string;
};

/**
 * Component
 */
const MainContent: FC<Props> = ({ forecast, location }) => {
  const { current, forecast: next7Days } = forecast || {};
  return (
    <main className={styles.main}>
      {current && location && (
        <CurrentWeather location={location} weather={current} />
      )}
      {next7Days && <WeekForecast forecast={next7Days} />}
    </main>
  );
};

export default MainContent;

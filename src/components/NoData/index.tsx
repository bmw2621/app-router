import { WeatherType } from "@/typedefs/weather";
import WeatherIcon from "../WeatherIcon";
import styles from "./nodata.module.css";
import WeatherMan from "./WeatherMan";

/**
 * Component
 */
const NoData = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Search for a Location</h1>
      <div>
        {process.env.PARTY_TIME ? (
          <WeatherMan
            colors={["#e5cd37", "#580a36", "var(--primary)"]}
            size="100%"
          />
        ) : (
          <WeatherIcon weather={WeatherType.Sunny} isLarge />
        )}
      </div>
      <p className={styles.text}>
        Get your personalized and highly accurate weather forecast, tailored
        specifically to your needs. Always accurate, always thorough!
      </p>
    </div>
  );
};

export default NoData;

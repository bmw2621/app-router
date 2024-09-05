import Blah from "@/assets/Blah.svg";
import Freezing from "@/assets/Freezing.svg";
import Hell from "@/assets/Hell.svg";
import Sun from "@/assets/Sun.svg";
import Typhoon from "@/assets/Typhoon.svg";
import { WeatherType } from "@/typedefs/weather";
import Image from "next/image";
import { FC } from "react";

/**
 * Types
 */
type Props = {
  weather: WeatherType;
  isLarge?: boolean;
};

/**
 * Helpers
 */
const icons = new Map<WeatherType, string>([
  [WeatherType.Cloudy, Blah],
  [WeatherType.Cold, Freezing],
  [WeatherType.Hot, Hell],
  [WeatherType.Sunny, Sun],
  [WeatherType.Rainy, Typhoon],
]);

/**
 * Component
 */
const WeatherIcon: FC<Props> = ({ weather, isLarge }) => {
  return (
    <Image
      style={{ justifySelf: "center" }}
      width={isLarge ? 300 : 85}
      src={icons.get(weather)!}
      alt=""
    />
  );
};

export default WeatherIcon;

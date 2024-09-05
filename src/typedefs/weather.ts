export type WeatherForecast = {
  current: WeatherCurrent;
  forecast: WeatherFuture[];
};

export type WeatherCurrent = {
  temp: number;
  tempUnit: string;
  description: string;
  asOf: Date;
  feelsLike: number;
  windSpeed: string;
  visibility: string;
  weatherCode: number;
};

export type WeatherFuture = {
  date: Date;
  weatherCode: number;
  tempUnit: string;
  temp: MinMax;
  feelsLike: MinMax;
  description: string;
};

export type MinMax = {
  max: number;
  min: number;
};

export enum WeatherType {
  Cloudy = "Blah",
  Cold = "Freezing",
  Hot = "Hell",
  Sunny = "Sun",
  Rainy = "Typhoon",
}

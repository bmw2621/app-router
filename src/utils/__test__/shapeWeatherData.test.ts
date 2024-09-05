import { WeatherApiResponse } from "@/services/getWeather";
import { WeatherForecast } from "@/typedefs/weather";
import shapeWeatherData from "../shapeWeatherData";

jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));

const fakeData: WeatherApiResponse = {
  latitude: 31.930124,
  longitude: -81.31414,
  generationtime_ms: 0.47600269317626953,
  utc_offset_seconds: 0,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: 6,
  current_units: {
    time: "unixtime",
    interval: "seconds",
    temperature_2m: "°F",
    relative_humidity_2m: "%",
    apparent_temperature: "°F",
    is_day: "",
    precipitation: "inch",
    rain: "inch",
    showers: "inch",
    snowfall: "inch",
    weather_code: "wmo code",
    cloud_cover: "%",
    wind_speed_10m: "mp/h",
  },
  current: {
    time: 1724419800,
    interval: 900,
    temperature_2m: 73.3,
    relative_humidity_2m: 69,
    apparent_temperature: 72.9,
    is_day: 1,
    precipitation: 0,
    rain: 0,
    showers: 0,
    snowfall: 0,
    weather_code: 3,
    cloud_cover: 100,
    wind_speed_10m: 11.4,
  },
  hourly_units: { time: "unixtime", visibility: "ft" },
  hourly: {
    time: [
      1724371200, 1724374800, 1724378400, 1724382000, 1724385600, 1724389200,
      1724392800, 1724396400, 1724400000, 1724403600, 1724407200, 1724410800,
      1724414400, 1724418000, 1724421600, 1724425200, 1724428800, 1724432400,
      1724436000, 1724439600, 1724443200, 1724446800, 1724450400, 1724454000,
      1724457600, 1724461200, 1724464800, 1724468400, 1724472000, 1724475600,
      1724479200, 1724482800, 1724486400, 1724490000, 1724493600, 1724497200,
      1724500800, 1724504400, 1724508000, 1724511600, 1724515200, 1724518800,
      1724522400, 1724526000, 1724529600, 1724533200, 1724536800, 1724540400,
      1724544000, 1724547600, 1724551200, 1724554800, 1724558400, 1724562000,
      1724565600, 1724569200, 1724572800, 1724576400, 1724580000, 1724583600,
      1724587200, 1724590800, 1724594400, 1724598000, 1724601600, 1724605200,
      1724608800, 1724612400, 1724616000, 1724619600, 1724623200, 1724626800,
      1724630400, 1724634000, 1724637600, 1724641200, 1724644800, 1724648400,
      1724652000, 1724655600, 1724659200, 1724662800, 1724666400, 1724670000,
      1724673600, 1724677200, 1724680800, 1724684400, 1724688000, 1724691600,
      1724695200, 1724698800, 1724702400, 1724706000, 1724709600, 1724713200,
      1724716800, 1724720400, 1724724000, 1724727600, 1724731200, 1724734800,
      1724738400, 1724742000, 1724745600, 1724749200, 1724752800, 1724756400,
      1724760000, 1724763600, 1724767200, 1724770800, 1724774400, 1724778000,
      1724781600, 1724785200, 1724788800, 1724792400, 1724796000, 1724799600,
      1724803200, 1724806800, 1724810400, 1724814000, 1724817600, 1724821200,
      1724824800, 1724828400, 1724832000, 1724835600, 1724839200, 1724842800,
      1724846400, 1724850000, 1724853600, 1724857200, 1724860800, 1724864400,
      1724868000, 1724871600, 1724875200, 1724878800, 1724882400, 1724886000,
      1724889600, 1724893200, 1724896800, 1724900400, 1724904000, 1724907600,
      1724911200, 1724914800, 1724918400, 1724922000, 1724925600, 1724929200,
      1724932800, 1724936400, 1724940000, 1724943600, 1724947200, 1724950800,
      1724954400, 1724958000, 1724961600, 1724965200, 1724968800, 1724972400,
    ],
    visibility: [
      85301.836, 73162.727, 67585.305, 58070.867, 53477.691, 61679.789,
      55446.195, 72506.562, 62664.043, 73490.812, 60367.453, 62992.125,
      63976.379, 77755.906, 79724.406, 76443.57, 76771.656, 72178.477, 51837.27,
      50196.852, 53149.605, 51837.27, 60695.539, 55446.195, 48556.43, 47244.094,
      43963.254, 43307.086, 47900.262, 45931.758, 51837.27, 51509.188,
      50524.934, 50853.02, 52493.438, 51837.27, 55446.195, 63648.293, 69881.891,
      77427.82, 89895.016, 102034.125, 111548.555, 111548.555, 105971.133,
      103674.539, 94160.109, 75131.234, 66272.969, 56430.445, 51509.188,
      46259.844, 46259.844, 46259.844, 45603.676, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      71850.391, 79199.477, 78937.008, 77755.906, 73622.047, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477, 79199.477, 79199.477, 79199.477,
      79199.477, 79199.477, 79199.477,
    ],
  },
  daily_units: {
    time: "unixtime",
    weather_code: "wmo code",
    temperature_2m_max: "°F",
    temperature_2m_min: "°F",
    apparent_temperature_max: "°F",
    apparent_temperature_min: "°F",
    precipitation_probability_max: "%",
  },
  daily: {
    time: [
      1724371200, 1724457600, 1724544000, 1724630400, 1724716800, 1724803200,
      1724889600,
    ],
    weather_code: [53, 3, 53, 55, 51, 0, 2],
    temperature_2m_max: [77.4, 85.7, 86.3, 88.1, 95, 99.8, 102],
    temperature_2m_min: [69.7, 68.3, 69.8, 71.6, 71.6, 73.9, 76.7],
    apparent_temperature_max: [82.9, 91.2, 91.8, 96.2, 104.2, 105.8, 107.9],
    apparent_temperature_min: [69.9, 70.6, 74.1, 78.7, 79.2, 81.2, 83],
    precipitation_probability_max: [89, 39, 52, 56, 29, 19, 26],
  },
};

describe("shapeWeatherData util", () => {
  describe("when all data is present", () => {
    let testData: Partial<WeatherApiResponse>;
    beforeEach(() => {
      testData = JSON.parse(
        JSON.stringify(fakeData),
      ) as Partial<WeatherApiResponse>;
    });
    it("should have current and forecast objects", () => {
      // GIVEN
      const expectedProperties = ["current", "forecast"];
      testData.current = undefined;

      //WHEN
      const data = shapeWeatherData(testData);

      // THEN
      expectedProperties.forEach((prop) => expect(data).toHaveProperty(prop));
    });
    it("current property should have properties", () => {
      // GIVEN
      const expectedProperties = [
        "temp",
        "tempUnit",
        "description",
        "asOf",
        "feelsLike",
        "windSpeed",
        "visibility",
        "weatherCode",
      ];

      //WHEN
      const data = shapeWeatherData(testData);

      // THEN
      expectedProperties.forEach((prop) =>
        expect(data.current).toHaveProperty(prop),
      );
    });
    it("forecast poperty should be an array", () => {
      // WHEN
      const data = shapeWeatherData(testData);
      // THEN
      expect(data.forecast).toBeInstanceOf(Array);
      expect(data.forecast).toHaveLength(fakeData.daily.time.length);
    });
    it("forecast property should have properties", () => {
      // GIVEN
      const expectedProperties = [
        "date",
        "weatherCode",
        "tempUnit",
        "temp",
        "feelsLike",
        "description",
      ];

      //WHEN
      const data = shapeWeatherData(testData);

      // THEN
      expectedProperties.forEach((prop) =>
        expect(data.forecast[0]).toHaveProperty(prop),
      );
    });
  });

  describe("when all data is not present", () => {
    let testData: Partial<WeatherApiResponse>;
    beforeEach(() => {
      testData = JSON.parse(JSON.stringify(fakeData));
    });
    it("should have current and forecast objects", () => {
      // GIVEN
      const expectedProperties = ["current", "forecast"];

      //WHEN
      const data = shapeWeatherData(testData);

      // THEN
      expectedProperties.forEach((prop) => expect(data).toHaveProperty(prop));
    });
    it("current property should have properties", () => {
      // GIVEN
      const expectedProperties: {
        prop: keyof WeatherForecast["current"];
        defaultValue: any;
      }[] = [
        { prop: "temp", defaultValue: 0 },
        { prop: "tempUnit", defaultValue: "°F" },
        { prop: "description", defaultValue: "Uncertain" },
        { prop: "asOf", defaultValue: new Date("2020-01-01") },
        { prop: "feelsLike", defaultValue: 0 },
        { prop: "windSpeed", defaultValue: "---" },
        { prop: "visibility", defaultValue: "0 mi" },
        { prop: "weatherCode", defaultValue: 999 },
      ];
      testData.current = undefined;
      testData.current_units = undefined;
      testData.hourly = undefined;

      //WHEN
      const result = shapeWeatherData(testData);

      // THEN
      expectedProperties.forEach(({ prop, defaultValue }) => {
        expect(result.current).toHaveProperty(prop);
        expect(result.current[prop]).toStrictEqual(defaultValue);
      });
    });
    it("forecast poperty should be an array", () => {
      // WHEN
      const data = shapeWeatherData(testData);
      // THEN
      expect(data.forecast).toBeInstanceOf(Array);
      expect(data.forecast).toHaveLength(fakeData.daily.time.length);
    });
    it("forecast property should have properties", () => {
      // GIVEN
      const expectedProperties: {
        prop: keyof WeatherForecast["forecast"][number];
        defaultValue: any;
      }[] = [
        { prop: "tempUnit", defaultValue: "°F" },
        { prop: "description", defaultValue: "Uncertain" },
        { prop: "date", defaultValue: new Date(Date.now()) },
        { prop: "temp", defaultValue: { max: 0, min: 0 } },
        { prop: "feelsLike", defaultValue: { max: 0, min: 0 } },
        { prop: "weatherCode", defaultValue: 999 },
      ];
      testData.daily = {
        time: [Math.floor(new Date().getTime() / 1000)],
      } as WeatherApiResponse["daily"];
      testData.daily_units = undefined;

      //WHEN
      const result = shapeWeatherData(testData);

      // THEN
      expectedProperties.forEach(({ prop, defaultValue }) => {
        expect(result.forecast[0]).toHaveProperty(prop);
        expect(result.forecast[0][prop]).toStrictEqual(defaultValue);
      });
    });
  });
});

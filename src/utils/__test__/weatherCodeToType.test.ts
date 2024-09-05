import { WeatherType } from "@/typedefs/weather";
import weatherCodeToType from "../weatherCodeToType";

describe("weatherCodeToType util", () => {
  it("returns a WeatherType", () => {
    // THEN
    new Array(200).forEach((_, idx) => {
      expect(
        Object.keys(WeatherType).filter((t) => typeof t === "string"),
      ).toContain(weatherCodeToType(idx));
    });
  });
  it("returns hot under conditions", () => {
    expect(weatherCodeToType(0, 91)).toBe("Hell");
  });
});

import MainContent from "@/components/layout/MainContent";
import Navigation from "@/components/layout/Navigation";
import NoData from "@/components/NoData";
import getWeather from "@/services/getWeather";
import { WeatherForecast } from "@/typedefs/weather";
import { FC } from "react";
import { PageProps } from "../../.next/types/app/page";

/**
 * Component
 */
const Home: FC<PageProps> = async ({ searchParams }) => {
  let data: WeatherForecast | null = null;

  if (searchParams.lat && searchParams.lon) {
    data = await getWeather(Number(searchParams.lat), Number(searchParams.lon));
  }

  const location = searchParams.location
    ? decodeURI(searchParams.location)
    : undefined;

  return (
    <>
      <Navigation />
      {data ? <MainContent forecast={data} location={location} /> : <NoData />}
    </>
  );
};

export default Home;

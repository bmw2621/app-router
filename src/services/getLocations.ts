import { Location } from "@/typedefs/location";
import debounce from "debounce-promise";
import ky from "ky";

/**
 * Types
 */

type LocationApiResponse = { results: Location[] };

/**
 * Service
 */
const getLocations = async (name: string): Promise<Location[]> => {
  const baseUrl = `https://geocoding-api.open-meteo.com/v1/search`;
  try {
    const data = await ky
      .get<LocationApiResponse>(baseUrl, { searchParams: { name } })
      .json();

    return data.results;
  } catch (e) {
    console.error(e);
    return Promise.reject();
  }
};

export default debounce(getLocations, 300);

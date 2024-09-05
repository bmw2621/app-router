"use client";

import getLocations from "@/services/getLocations";
import { OptionType } from "@/typedefs/general";
import { LatLong } from "@/typedefs/location";
import { FC, useCallback } from "react";
import { SingleValue } from "react-select";
import AsyncSelect from "react-select/async";
import styles from "./navigation.module.css";

/**
 * Types
 */
type Props = {
  action: (
    newValue: SingleValue<OptionType<LatLong & { location: string }>>,
  ) => void;
};

/**
 * Component
 */
const NavigationInput: FC<Props> = ({ action }) => {
  const loadOptions = useCallback(
    async (
      search: string,
    ): Promise<OptionType<LatLong & { location: string }>[]> => {
      if (!Boolean(search.length)) return [];
      const locations = await getLocations(search);
      return locations.map(
        ({ latitude, longitude, name, country, admin1 }) => ({
          value: { latitude, longitude, location: `${name}, ${admin1}` },
          label: (
            <>
              <span className={styles.searchResult_city}>{name}</span>
              <span
                className={styles.searchResult_rest}
              >{` ${admin1}, ${country}`}</span>
            </>
          ),
        }),
      );
    },
    [],
  );
  return (
    <AsyncSelect
      cacheOptions
      name="search"
      className={styles.searchInput}
      loadOptions={loadOptions}
      onChange={action}
    />
  );
};

export default NavigationInput;

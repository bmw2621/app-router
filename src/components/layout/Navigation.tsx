import { OptionType } from "@/typedefs/general";
import { LatLong } from "@/typedefs/location";
import { redirect } from "next/navigation";
import { FC } from "react";
import { SingleValue } from "react-select";
import styles from "./navigation.module.css";
import NavigationInput from "./NavigationInput";

/**
 * Component
 */
const Navigation: FC = () => {
  const action = async (
    newValue: SingleValue<OptionType<LatLong & { location: string }>>,
  ) => {
    "use server";
    if (!newValue) return;
    const {
      value: { latitude, longitude, location },
    } = newValue;
    redirect(
      `?lat=${latitude}&lon=${longitude}&location=${encodeURI(location)}`,
    );
  };
  return (
    <nav className={styles.nav}>
      <h1 className={styles.heading}>My Weather</h1>
      <NavigationInput action={action} />
    </nav>
  );
};

export default Navigation;

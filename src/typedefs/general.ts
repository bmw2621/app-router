import { ReactNode } from "react";

export type OptionType<T = string> = {
  label: ReactNode;
  value: T;
};

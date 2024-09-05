import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import "./globals.css";

/**
 * Metadata
 */
export const metadata: Metadata = {
  title: "My Weather App",
  description: "Get your local weather",
};

/**
 * Component
 */
const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

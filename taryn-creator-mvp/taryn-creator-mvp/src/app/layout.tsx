import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taryn Creator Command Center",
  description: "Creator dashboard for Taryn Truly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

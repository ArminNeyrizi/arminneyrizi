import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kalameh = localFont({
  src: [
    { path: "./fonts/Kalameh-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/Kalameh-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/Kalameh-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Kalameh-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Kalameh-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Kalameh-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Kalameh-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Kalameh-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/Kalameh-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-kalameh",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Armin Neyrizi — System Designer",
  description:
    "Armin Neyrizi — System Designer, Project Manager, and Ecosystem Builder. Founder of Joinly, a Project-Based Talent Factory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={kalameh.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
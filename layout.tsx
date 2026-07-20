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
  title: "آرمین نیریزی — طراح سیستم",
  description:
    "آرمین نیریزی؛ طراح سیستم، مدیر پروژه و سازنده اکوسیستم. سازنده‌ی Joinly — کارخانه‌ی استعداد پروژه‌محور.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={kalameh.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fa" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}

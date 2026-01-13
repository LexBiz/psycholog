import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";

function getPublicSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
}

// Выразительный, мягкий, современный - для текста
const bodyFont = Nunito({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Стильный, жирный, запоминающийся - для заголовков
const headingFont = Montserrat({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Як пережити розрив стосунків і повернутись до нормального життя — онлайн-курс",
  description:
    "Онлайн-курс для тих, хто хоче пережити біль розриву, повернути собі ресурс і знову відчути радість життя.",
  metadataBase: new URL(getPublicSiteUrl()),
  openGraph: {
    title:
      "Як пережити розрив стосунків і повернутись до нормального життя — онлайн-курс",
    description:
      "Структурований онлайн-курс, який допоможе вам пройти через біль розриву, відновити внутрішній ресурс і повернутись до повноцінного життя.",
    type: "website",
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Як пережити розрив стосунків і повернутись до нормального життя — онлайн-курс",
    description:
      "Онлайн-курс для тих, хто хоче пережити біль розриву, повернути собі ресурс і знову відчути радість життя.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}

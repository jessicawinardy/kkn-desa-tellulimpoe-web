import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal"],
  fallback: ["Helvetica Neue", "sans-serif"],
  subsets: ["latin-ext", "latin"],
});

export const metadata: Metadata = {
  title: "Desa Tellulimpoe",
  description: "Website Profil Desa Tellulimpoe",
  icons: {
    icon: "/images/sinjai-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

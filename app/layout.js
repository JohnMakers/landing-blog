import "./globals.css";
import { Outfit, Inter } from "next/font/google";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Wonderful Cannabis — Local Dispensary",
  description:
    "Legal cannabis dispensary — browse products, see photos, get directions, and learn from our blog.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}

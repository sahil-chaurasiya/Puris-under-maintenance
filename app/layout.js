import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.puriswater.com"),
  title: "Puris Water | Purova packaged drinking water, Mandideep",
  description:
    "Purova by Puris Food & Beverages: packaged drinking water with added minerals in 2 L, 1 L, 500 ml and 250 ml. Call +91 91117 77175 to order.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Puris Water",
    title: "Puris Water | Purova packaged drinking water, Mandideep",
    description:
      "Packaged drinking water with added minerals in 2 L, 1 L, 500 ml and 250 ml. Call +91 91117 77175 to order.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Puris Water: Purova, The Pure Trust" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puris Water | Purova packaged drinking water",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
import { Metadata } from 'next';
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import TopBar from "./layout/TopBar";

export const metadata = {
  title: 'Skyrise Construction and Interiors | Residential & Commercial Construction in Delhi NCR',
  description: 'Skyrise Construction and Interiors: Expert residential & commercial construction, renovation, modular houses, and interior services in Delhi NCR. Contact us for innovative solutions.',
  canonical: 'https://www.skyriseconstruction.in/',
  openGraph: {
    title: "Skyrise Construction and Interiors | Residential & Commercial Construction in Delhi NCR",
    description: "Expert construction and interior services in Delhi NCR.",
    url: "https://www.skyriseconstruction.in",
    images: [
      {
        url: "https://www.yourwebsite.com/your-image.jpg",
        width: 800,
        height: 600,
        alt: "Skyrise Construction",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={metadata.canonical} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://yourwebsite.com/default-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://yourwebsite.com/default-image.jpg" />
      </head>
      <body>
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

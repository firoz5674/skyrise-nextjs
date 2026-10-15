import "./globals.css";
import { ThemeProvider } from './context/ThemeContext';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import JsonLd from "./components/JsonLd";
import { organization, website } from "./lib/schema";


export default function RootLayout({ children, metadata: pageMetadata = {} }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>
      <body>
        <JsonLd graph={[organization, website]} />
        <ThemeProvider >
          <Header />
          {children}
          <Footer />
        </ThemeProvider >
      </body>
    </html>
  );
}

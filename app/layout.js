import { Metadata } from 'next';
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import TopBar from "./layout/TopBar";


export default function RootLayout({ children, metadata: pageMetadata = {} }) {
 
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
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

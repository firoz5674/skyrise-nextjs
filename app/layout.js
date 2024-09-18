import { Metadata } from 'next';
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import TopBar from "./layout/TopBar";


export default function RootLayout({ children, metadata: pageMetadata = {} }) {
 
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

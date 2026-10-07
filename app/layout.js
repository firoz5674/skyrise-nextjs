import { Metadata } from 'next';
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import TopBar from "./layout/TopBar";


export default function RootLayout({ children, metadata: pageMetadata = {} }) {
 
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="TVJSR_fEOeHi_DTQh7NSGLiYEHRwHAjHu2GPe3KRbf0" />
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

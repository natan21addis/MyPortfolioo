"use client"
import "./globals.css";
import { Raleway } from "next/font/google";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GoogleAnalytics from "./GoogleAnalytics";
import ToasterContext from "./ToastContext"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const raleway = Raleway({ subsets: ["latin"] });

// export const metadata = {
//   title: "switch247",
//   description: "My dev portfolio",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nathan addis abebe</title>
        <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      </head>

      <body className={raleway.className}>
      <ProgressBar
          height="4px"
          color="#c770f0"
          options={{ showSpinner: false }}
          shallowRouting
        />
          <Header />
          <ToasterContext />
          
          {children}

        <Footer />
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import "./globals.css";
import Nav from "./(components)/Nav";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./(components)/Footer";

config.autoAddCss = false;

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Gatchabit",
  description: "A simple tool to encourage you to get stuff done.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-xl m-auto pt-3 px-5 pb-4">
          <Nav />
        </div>
        <div className="max-w-xl m-auto px-5">{children}</div>
        <div className="max-w-xl m-auto px-5 pt-4">
          <Footer />
        </div>
      </body>
    </html>
  );
}

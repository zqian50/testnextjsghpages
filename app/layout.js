import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.js"
import Footer from "@/components/Footer.js"

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "StuyBike",
  description: "The official site for the Stuyvesant Bike Non Profit Organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Navbar />
        {children}
        <div className="spacer"/>
        <Footer />
      </body>
    </html>
  );
}

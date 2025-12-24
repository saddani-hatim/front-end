import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "StyleStore - Premium Fashion",
  description: "Discover the latest fashion trends and premium styles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} bg-dark-900 text-slate-50 antialiased`}>
        <Navbar/>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

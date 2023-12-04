import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Supakrit65 | Portfolio",
  description: "Supakrit is a undergraduate software engineering student.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-100 text-slate-900 pt-28 sm:pt-36 dark:bg-slate-900 dark:text-slate-50 dark:text-opacity-90`}>
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent dark:from-slate-700 dark:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-slate-200 to-transparent dark:from-slate-900 dark:to-transparent"></div>
        </div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

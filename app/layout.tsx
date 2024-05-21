import "./globals.css";
import { Roboto } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ContactFooter from "@/components/contact-footer";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: '400',
 });

export const metadata = {
  title: "Raveena Amarasiriwardena | Personal Portfolio",
  description: "Raveena is a UI UX Engineer with 1 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${roboto.className} relative sm:pt-36 md:pt-8 lg:pt-14 bg-[#13213B] text-gray-50 text-opacity-90`}
      >
          <ActiveSectionContextProvider>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
            <ContactFooter />
          </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

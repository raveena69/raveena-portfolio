import Header from "@/components/header";
import "./globals.css";
import { Roboto } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
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
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}

          <ActiveSectionContextProvider>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
            <ContactFooter />

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import ThemeContextProvider from '@/context/ThemeContext';
import ActiveSectionContextProvider from '@/context/ActiveSectionContext';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/ThemeSwitch';

const font = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Syarta Pajaziti',
  description: 'Syarta is a Science Computer student',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning={true}>
      <body className={`${font.className} relative text-gray-950 pt-16 bg-gray-50 sm:pt-36 dark:text-gray-50 dark:text-opacity-90 dark:bg-gray-900`}>
        <div className="absolute top-[-6rem] right-[11rem] -z-10 w-[31.25rem] h-[31.25rem] rounded-full blur-[10rem] bg-[#4d99ccd5] sm:w-[68.75rem] dark:bg-[#284b63]"></div>
        <div className="absolute top-[-1rem] left-[-35rem] -z-10 w-[50rem] h-[31.25rem] rounded-full blur-[10rem] bg-[#4ac8ccd5] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#3c6e71]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            
            <Toaster position="top-center" toastOptions={{duration: 3000}} />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
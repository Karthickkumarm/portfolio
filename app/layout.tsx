import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header";
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Karthick's Portfolio",
  description: 'SDE II | 3+ years crafting AI-powered, cloud-ready systems. Agile mindset. Obsessed with clean architecture & real impact.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-[#FAF8FF] text-gray-950 relative  pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#f5f3ff] absolute -z-10  top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem]
         rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#1e1b4b]"></div>
        <div className="bg-[#ede9fe] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem]
         rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
         dark:bg-[#2e1065]"></div>
         <ThemeContextProvider>
         <ActiveSectionContextProvider>
            <Header />
            <Toaster position='top-right' />
            {children}
            <Footer />
            <ThemeSwitch />
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
        </body>
    </html>
  )
}

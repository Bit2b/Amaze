'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import ThemeDataProvider from "@/context/theme-data-provider";
import dynamic from 'next/dynamic'
const NextThemesProvider = dynamic(
	() => import('next-themes').then((e) => e.ThemeProvider),
	{
		ssr: false,
	}
)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen`}>
      <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeDataProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 flex flex-col">
            <SidebarTrigger />
            <div className="flex-1 flex justify-center items-center">
              {children}
            </div>
          </main>
        </SidebarProvider></ThemeDataProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}

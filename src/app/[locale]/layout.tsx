import type { Metadata } from "next";
import "../[locale]/globals.css";
import { SquareArrowDown, SquareArrowUp } from "lucide-react";
import { Geist, } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";


export const metadata: Metadata = {
  title: "Marcello Lopes | Frontend Developer",
  description: "Portfolio of Marcello Lopes, a Frontend Developer specializing in React, Next.js and React Native.",
  icons: {
    icon: '/favicon.svg',
  },
};

const geist = Geist({
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className={geist.className}>
      <body className="w-screen overflow-x-hidden">
        <ErrorBoundary>
          <div className="fixed bottom-0 right-0 w-full h-full z-50 pointer-events-none">
            <div className="flex gap-1 p-2">
              <SquareArrowUp className="w-5 h-5" aria-hidden="true" />
              <SquareArrowDown className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
          <main role="region" aria-label="Main content">
            {children}
          </main>
        </ErrorBoundary>
      </body>
    </html>
  );
}

import { cn } from "@/lib/utils";

import { ClerkProvider } from "@clerk/nextjs";

import { IBM_Plex_Sans } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Proxima",
  description: "A website for the Proxima ai project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
        <body className={cn("font-ibmPlexSans antialiased", ibmPlexSans.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

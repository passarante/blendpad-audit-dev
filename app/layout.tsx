import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-gray-900 to-blue-900 ",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}

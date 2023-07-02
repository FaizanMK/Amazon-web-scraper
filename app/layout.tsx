import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amazon WeB scraper",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-[#F7FBFF] h-screen">
        {/* Sidebar */}
        <Sidebar />
        <main className="p-10 max-w-7xl w-full mx-auto overflow-y-auto">
          {/* Header */}
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

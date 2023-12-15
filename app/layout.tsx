import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Looscape",
  description:
    "Rent digital billboards nationwide. Choose location, ad duration, and hosting period for tailored campaigns. Transparent pricing based on location and duration. Elevate your brand visibility effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}

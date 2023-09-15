import "./globals.css";

import { Jost } from "next/font/google";

import HydrationZustand from "@/components/HydrationZustand/HydrationZustand";

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Product Feedback App",
  description: "Product Feedback App Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HydrationZustand>{children}</HydrationZustand>
      </body>
    </html>
  );
}

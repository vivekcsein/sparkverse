import type { Metadata } from "next";
import "./globals.css";
import FontsProvider from "@/components/Providers/FontsProvider";
import LayoutProvider from "@/components/Providers/LayoutProvider";
import { poppins, roboto } from "@/libs/config/config.styles";

export const metadata: Metadata = {
  title: "Sparkverse",
  description: "An spark to solve real world problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <FontsProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </FontsProvider>
      </body>
    </html>
  );
}

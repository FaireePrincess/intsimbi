import type { Metadata } from "next";
import { Footer, Header } from "@/components";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Intsimbi Concepts | Steel Fabrication Western Cape",
    description:
      "Intsimbi Concepts provides structural steel fabrication, metal work and stainless steel fabrication across the Western Cape.",
    path: "/",
    keywords: ["steel fabrication western cape"]
  }),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

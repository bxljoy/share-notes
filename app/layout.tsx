import "@/styles/globals.css";
import { inter } from "@/components/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Share Notes",
    default: "Share Notes",
  },
  description: "Next.js Creates Share Notes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

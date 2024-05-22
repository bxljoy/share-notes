import "@/styles/globals.css";
import { Metadata } from "next";
import { inter } from "@/styles/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Share Notes",
    default: "Share Notes",
  },
  description: "Share Notes Sign Up Page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  );
}

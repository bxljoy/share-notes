import "@/styles/globals.css";
import { Metadata } from "next";
import Header from "@/components/header";

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
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

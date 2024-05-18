import "@/styles/globals.css";
import { Metadata } from "next";
import { Session } from "next-auth";
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
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
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
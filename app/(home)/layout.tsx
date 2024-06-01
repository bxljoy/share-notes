import "@/styles/globals.css";
import { Metadata } from "next";
import Provider from "@/components/provider";
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
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Header />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

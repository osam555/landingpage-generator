import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LP Gen AI | Automated Landing Page Generator",
  description: "Generate high-conversion landing pages in seconds using specialized AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="pulse-bg">
          <div className="pulse-blob blob-1"></div>
          <div className="pulse-blob blob-2"></div>
        </div>
        {children}
      </body>
    </html>
  );
}

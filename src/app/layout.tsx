import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blockit",
  description: "Blockit is a platform for creating and sharing blocks of code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-lt-installed="true">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

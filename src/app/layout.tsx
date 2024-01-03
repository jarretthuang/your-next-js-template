import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Pick your theme colours here. This impacts the border colour in certain browsers such as Safari on iOS. */}
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#ffffff"
      />
      <meta name="theme-color" content="#000000" />
      <body>{children}</body>
      {/* Remove or replace this with other vendors if you're not using Vercel Analytics */}
      <Analytics />
    </html>
  );
}

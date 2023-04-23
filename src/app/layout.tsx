import "./globals.css";
import { Ubuntu } from "next/font/google";

// Customize the fonts you want to use here
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const fonts = [ubuntu];
const fontsCssClass = fonts.map((font) => font.className).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontsCssClass}>{children}</body>
    </html>
  );
}

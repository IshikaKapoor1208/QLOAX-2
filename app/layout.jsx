import "./globals.css";

export const metadata = {
  title: "QLOAX | Intelligent Enterprise",
  description: "QLOAX landing page built with Next.js, React, and Tailwind CSS."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

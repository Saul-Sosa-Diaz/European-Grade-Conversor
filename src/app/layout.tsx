import type { Metadata } from "next";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css"
import "/node_modules/primeflex/primeflex.css"

export const metadata: Metadata = {
  title: "Erasmus grade conversion tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

import "~/styles/globals.css";
import { Inter } from "next/font/google";
import Logo from "components/Logo";
import Footer from "components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <>
          <Logo>{children}</Logo>
          <Footer />
        </>
      </body>
    </html>
  );
}

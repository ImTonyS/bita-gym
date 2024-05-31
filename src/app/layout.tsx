import Navbar from "components/Navbar";
import Hero from "components/Hero";
import "~/styles/globals.css"
import { Inter } from 'next/font/google'
const inter = Inter({subsets: ["latin"] })

export default function RootLayout({ 
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`min-h-screen mx-auto ${inter.className}`}>
                <>
                <Navbar>{children}</Navbar>
                </>
            </body>
        </html>
    )
}
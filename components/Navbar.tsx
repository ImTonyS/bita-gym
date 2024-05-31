"use client";
import Image from "next/image";
import Logo from "images/logo-texto.png"

export default function Navbar({ children }: { children: React.ReactNode }) {

    return (
    <>
        <div className="flex justify-center p-2">
            <a href="/">
            <Image
            src={Logo}
            width={200}
            height={150}
            alt="Logo"
            />            
            </a>
        </div>
        {children}
    </>
    )

}


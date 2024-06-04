"use client";
import "~/styles/globals.css";
import logo from "images/logo-texto.png";
import Image from "next/image";

export default function Logo({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="absolute left-4 top-4 z-20">
        <Image src={logo} width={200} height={150} alt="Logo" />
      </header>
      {children}
    </>
  );
}

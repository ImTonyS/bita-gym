"use client";
import "~/styles/globals.css";
import { MagneticText } from "../../../../components/MagneticText";

export default function Hero() {
  const text = "Transforma tu";
  return (
    <>
      {/* Hero */}

      <div
        id="inicio"
        className="relative flex min-h-screen flex-col items-start justify-center overflow-y-hidden"
      >
        <div className="absolute left-0 top-0 z-0 h-full w-full">
          <video
            className="h-full w-full object-cover"
            src="/videos/bitagym.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="absolute z-10 h-full w-full bg-gradient-to-r from-bita-dark to-transparent to-70%"></div>

        <div className="z-30 mx-10 max-w-[85rem] space-y-8 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl  space-y-1 text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="gray"
              className="size-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
            <MagneticText
              body={text}
              className="font-var w-full max-w-2xl text-left text-4xl text-[#e9e9e9] md:text-6xl"
            >
              {(tokens) =>
                tokens.map((token, index) => (
                  <MagneticText.Token
                    key={index}
                    body={token}
                    className="inline-block cursor-default whitespace-pre"
                  />
                ))
              }
            </MagneticText>
            <h1 className=" text-5xl font-semibold text-bita-green drop-shadow-xl sm:text-5xl md:text-6xl lg:text-7xl">
              mente y cuerpo <br />
            </h1>
          </div>
          {/* End Title */}
          <div className="mx-auto max-w-3xl text-left">
            <p className="text-lg text-[#e9e9e9] sm:text-2xl">
              Forma parte del gimansio{" "}
              <span className="font-bold">más grande</span>,<br /> en el estado{" "}
              <span className="font-bold">más grande</span>
            </p>
          </div>
          {/* Buttons */}
          <div className="text-left">
            <a
              className="focus:ring-white-600 inline-flex items-center justify-center gap-x-3 rounded-full border border-none bg-gradient-to-tl from-bita-green to-bita-dark px-6 py-3 text-center text-sm font-medium text-white shadow-md shadow-transparent hover:shadow-bita-green focus:outline-none focus:ring-1 "
              href="#"
            >
              Empieza ahora
              <svg
                className="size-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
          {/* End Buttons */}
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}

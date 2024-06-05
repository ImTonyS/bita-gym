"use client";
import { Separation } from "components/Separation";
import { MyMap } from "./Map";
export default function VisitUs() {
  return (
    <>
      <Separation />

      <section className=" flex justify-center  bg-bita-dark py-10 ">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid items-center gap-4 md:grid-cols-2 md:gap-8 xl:gap-20">
            <div>
              <h1 className="block text-center text-3xl font-bold text-zinc-50 sm:text-left sm:text-4xl lg:text-5xl lg:leading-tight ">
                ¡Visítanos y conoce nuestras{" "}
                <span className="text-bita-green drop-shadow-sm">
                  instalaciones!
                </span>
              </h1>
              <p className="mt-3 text-center  font-medium text-[#e3e3e3] sm:text-left">
                Nos encontramos ubicados en Ave. Américas #310 y Ortíz Mena en
                Chihuahua, Chihuahua, punto con las mejores rutas de acceso de
                la ciudad, por lo que no tendrás problema en llegar aquí.
              </p>
              {/* Buttons */}
            </div>
            {/* End Col */}
            <div className="relative mx-auto py-8 ">
              <div className="flex items-center justify-center shadow-md shadow-white">
                <MyMap />
              </div>
            </div>
            {/* End SVG*/}
          </div>

          <div className="mt-4 grid w-full gap-3 sm:inline-flex">
            <div className="flex justify-center">
              <a
                className="focus:ring-white-600 inline-flex items-center justify-center gap-x-3 rounded-full border border-none bg-gradient-to-tl from-bita-green to-bita-dark px-6 py-3 text-center text-sm font-medium text-white shadow-md shadow-transparent hover:shadow-bita-green focus:outline-none "
                href="/pricing"
              >
                Contáctanos
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
          </div>

          {/* End Col */}
        </div>

        {/* End Grid */}
      </section>
    </>
  );
}

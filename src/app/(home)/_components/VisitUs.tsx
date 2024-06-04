import { Separation } from "components/Separation";
export default function VisitUs() {
  return (
    <>
      <Separation />

      <section className="mx-auto flex justify-center  bg-bita-dark py-10 ">
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid items-center gap-4 md:grid-cols-2 md:gap-8 xl:gap-20">
            <div>
              <h1 className="block text-center text-3xl font-bold text-zinc-50 sm:text-left sm:text-4xl lg:text-6xl lg:leading-tight ">
                ¡Visítanos y conoce nuestras{" "}
                <span className="text-bita-green drop-shadow-sm">
                  instalaciones!
                </span>
              </h1>
              <p className="mt-3 text-center text-lg font-medium text-[#e3e3e3] sm:text-left">
                Nos encontramos ubicados en Ave. Américas #310 y Ortíz Mena en
                Chihuahua, Chihuahua, punto con las mejores rutas de acceso de
                la ciudad, por lo que no tendrás problema en llegar aquí.
              </p>
              {/* Buttons */}
            </div>
            {/* End Col */}
            <div className="relative mx-auto py-8 ">
              <div className="absolute inset-0 -z-[1] -mb-4 -ms-4 me-4 mt-4 size-full rounded-md bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 lg:-mb-6 lg:-ms-6 lg:me-6 lg:mt-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6802.710751785867!2d-106.10628223460014!3d28.659039811759932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea43787152ae43%3A0x5e49bacbf5930cc5!2sBITA%20FITNESS!5e0!3m2!1ses!2smx!4v1717458988434!5m2!1ses!2smx"
                width="600"
                height="350"
                className=" w-full border border-0 shadow-lg"
                loading="lazy"
              ></iframe>
            </div>
            {/* End SVG*/}
          </div>

          <div className="mt-4 grid w-full gap-3 sm:inline-flex">
            <a
              className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-bita-green px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
              href="#"
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
          {/* End Col */}
        </div>
        {/* End Grid */}
      </section>
    </>
  );
}

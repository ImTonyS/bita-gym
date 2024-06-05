import Bar from "components/Bar";
import Image from "next/image";
import Icon1 from "images/247.png";
import Icon2 from "images/groups.png";
import Icon3 from "images/trainer.png";
import Icon4 from "images/bathroom.png";
import Icon5 from "images/sauna.png";
import Icon6 from "images/juice.png";

export default function Services() {
  return (
    <>
      <div id="services" className="bg-bita-dark">
        <div className="mx-auto max-w-[85rem] px-6 py-10 sm:px-8 lg:px-8 lg:py-14">
          {/* Grid */}
          <div className="grid gap-12 md:grid-cols-2">
            <div className="lg:w-full">
              <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl dark:text-white">
                Conoce{" "}
                <span className="text-bita-green">nuestros servicios, </span>
                conoce tu club
              </h2>
              <p className="mt-3 text-gray-800 dark:text-neutral-400">
                Gimnasio en Chihuahua que ofrece una membresía completa los 7
                días de la semana, con la mejor tecnología y equipos para tu
                entrenamiento.
              </p>
              <p className="mt-5">
                <a
                  className="inline-flex items-center gap-x-1 font-medium text-bita-green hover:underline "
                  href="#"
                >
                  Contáctanos para saber más
                  <svg
                    className="size-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
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
              </p>
            </div>
            {/* End Col */}
            <div className="space-y-6 lg:space-y-2">
              <div className="grid grid-cols-2 gap-8">
                <Bar servicio="Acceso los 7 días de la semana">
                  <Image src={Icon1} width={24} height={24} alt="24/7"></Image>
                </Bar>
                <Bar servicio="Clases grupales ilimitadas">
                  <Image
                    src={Icon2}
                    width={46}
                    height={46}
                    alt="Sesiones"
                  ></Image>
                </Bar>
                <Bar servicio="Servicio de entrenadores">
                  <Image src={Icon3} width={30} height={30} alt="24/7"></Image>
                </Bar>
                <Bar servicio="Baños equipados privados">
                  <Image src={Icon4} width={30} height={30} alt="24/7"></Image>
                </Bar>
                <Bar servicio="Área de regaderas y saunas">
                  <Image src={Icon5} width={24} height={24} alt="24/7"></Image>
                </Bar>
                <Bar servicio="Barra de jugos">
                  <Image src={Icon6} width={30} height={30} alt="24/7"></Image>
                </Bar>
              </div>
              {/* End Icon Block */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
    </>
  );
}

import bitaMansonry1 from "images/bita-mansonry-1.webp";
import bitaMansonry2 from "images/bita-mansonry-2.webp";
import bitaMansonry3 from "images/bita-mansonry-3.webp";
import bitaMansonry4 from "images/bita-mansonry-4.webp";
import bitaMansonry5 from "images/bita-mansonry-5.webp";
import { Separation } from "components/Separation";

import Image from "next/image";

export default function Activities() {
  return (
    <>
      <Separation />
      <section className="bg-bita-dark ">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          {/* Grid */}
          <div className="grid-cols grid gap-6 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-7 sm:self-end md:col-span-8 lg:col-span-5 lg:col-start-3">
              {/* Card */}
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                <Image
                  className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  src={bitaMansonry2}
                  alt="Image Description"
                />

                <div className="relative bottom-10 left-5 rounded-lg bg-gradient-to-r from-bita-green via-transparent via-80% to-transparent px-5 py-4">
                  <h1 className="font-bold text-white drop-shadow-md">
                    Clases Grupales
                  </h1>
                </div>
              </div>

              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-span-12 sm:col-span-5 sm:self-end md:col-span-4 lg:col-span-3">
              {/* Card */}

              <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                <Image
                  className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  src={bitaMansonry1}
                  alt="Image Description"
                />

                <div className="relative bottom-10 left-5 rounded-lg bg-gradient-to-r from-bita-green via-transparent via-80% to-transparent px-5 py-4 sm:bottom-8 sm:py-3">
                  <h1 className="font-bold text-zinc-50 drop-shadow-lg">
                    Bita Gym
                  </h1>
                </div>
              </div>

              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-span-12 md:col-span-4">
              {/* Card */}

              <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                <Image
                  className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  src={bitaMansonry3}
                  alt="Image Description"
                />

                <div className="relative bottom-10 left-5 rounded-lg bg-gradient-to-r from-bita-green via-transparent via-80% to-transparent px-5 py-4 sm:bottom-8 sm:py-3">
                  <h1 className="font-bold text-zinc-50 drop-shadow-lg">
                    Barra de jugos
                  </h1>
                </div>
              </div>

              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-span-12 hidden sm:col-span-6 sm:block md:col-span-4">
              {/* Card */}

              <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                <Image
                  className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  src={bitaMansonry4}
                  alt="Image Description"
                />

                <div className="relative bottom-10 left-5 rounded-lg bg-gradient-to-r from-bita-green via-transparent via-80% to-transparent px-5 py-4">
                  <h1 className="font-bold text-zinc-50 drop-shadow-lg">
                    Bita Cross / Box
                  </h1>
                </div>
              </div>

              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-span-12 hidden sm:col-span-6 sm:block md:col-span-4">
              {/* Card */}

              <div className="aspect-w-12 aspect-h-7 sm:aspect-none overflow-hidden rounded-xl">
                <Image
                  className="w-full rounded-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  src={bitaMansonry5}
                  alt="Image Description"
                />

                <div className="relative bottom-10 left-5 rounded-lg bg-gradient-to-r from-bita-green via-transparent via-80% to-transparent px-5 py-4 sm:bottom-8 sm:py-3">
                  <h1 className="font-bold text-zinc-50 drop-shadow-lg">
                    Bita Fitness
                  </h1>
                </div>
              </div>

              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </section>
    </>
  );
}


import Hero from "../../../components/Hero";


export default async function Home() {

  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-bita-black to-bita-gray text-dark">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <Hero />
      </div>
    </main>
  );
}

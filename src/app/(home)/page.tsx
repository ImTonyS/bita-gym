import Activities from "~/app/(home)/_components/Activities";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import VisitUs from "./_components/VisitUs";

export default async function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Activities />
      <VisitUs />
    </>
  );
}

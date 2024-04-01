import NavBar from "@/components/NavBar";
import SectionSoftSkills from "@/components/SectionSoftSkills/SectionSoftSkills";
import SectionTecnologia from "@/components/SectionTecnologia";

import '../app/globals.css'
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <SectionTecnologia />
      <SectionSoftSkills />

      <Carousel />

      <Footer />
    </main>
  );
}
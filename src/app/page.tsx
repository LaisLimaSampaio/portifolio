'use client'

import { usePathname } from 'next/navigation';
import Contatos from "@/components/Contatos";
import ParticlesBackground from "@/components/ParticlesBackground";
import Footer from "@/components/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import { useEffect } from "react";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";


export default function Home() {

  const pathname = usePathname();

  useEffect(() => {
    const handleHash = () => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            element?.scrollIntoView({ behavior: "smooth" });
        }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
    }, [pathname]);

  return (
    
    <section id="about" className={`m-0 w-[100%] transition-colors duration-300 h-screen `}>

      <AboutMe />

      <div className="w-[100%] flex justify-center items-center flex-col">
        <Education />
      </div>

      <Skills />

      <Projects />
      
      <section id="contact" className={` flex flex-col justify-center items-center w-full h-screen `}>
            <ParticlesBackground />
            <Contatos />
      </section>

      <Footer />

    </section>

  );
}

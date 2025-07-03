'use client'

import ProjetoCard from "@/components/ProjetoCard";
import { projetos } from '@/data/projetos'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTheme } from "@/app/ThemeProvider";
import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";

export default function Projects(){
    const { theme } = useTheme();
    return(
        <section id="projects" className={` w-full lg:h-screen  flex flex-col  justify-center transition-colors duration-300 pb-20 lg:px-20 ${theme === 'dark' ? 'dark' : 'light'} `}>

          

            <div className="w-[100%] flex pb-10 flex-col justify-center items-center">
                <div className="flex text-center justify-center items-center align-middle w-[100%] ">
                    <VscDebugBreakpointFunctionUnverified className="text-[#9538F2] text-[2rem]"/>
                    <p className="text-[#9538F2]">PROJECTS</p>
                </div>
                <div className="lg:w-[60%] text-center flex my-13 flex-col gap-2 ">
                    <h1 className="text-[1.2rem] md:text-3xl font-bold"> Projetos acadêmicos e pessoais</h1>
                    <h3 className={`md:text-2xl ${theme  === 'dark' ? 'color-font-branco-30 '  : 'color-font-preto-30' } transition-colors duration-300`}>Aprendizados colocados em ação por meio de projetos que me ajudam a crescer, errar, melhorar e construir com mais confiança.</h3>
                </div>
            </div>
            <div className="flex flex-col gap-6 lg:hidden w-[100%] items-center">
                {projetos.map((projeto) => (
                <ProjetoCard key={projeto.id} projeto={projeto} />
                ))}
            </div>

            <div className="relative lg:flex items-center hidden  px-10">
            {/* Botão Anterior */}

                <div className="swiper-button-prev-custom absolute left-0 z-10 cursor-pointer" />

                {/* Carrossel */}
                <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                spaceBetween={24}
                loop
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    },
                    768: {
                    slidesPerView: 2,
                    },
                    1024: {
                    slidesPerView: 3,
                    },
                }}
                className="w-full "
                >
                {projetos.map((projeto) => (
                    <SwiperSlide key={projeto.id}>
                    <ProjetoCard projeto={projeto} />
                    </SwiperSlide>
                ))}
                </Swiper>

                {/* Botão Próximo */}
                <div className="swiper-button-next-custom absolute right-0 z-10 cursor-pointer" />
            </div>



      </section>
    );
}
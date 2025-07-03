'use client'
import { useTheme  } from "@/app/ThemeProvider";
import Image from 'next/image';
import { FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function AboutMe(){
    const { theme } = useTheme();
    return(
        <section id="aboutme" className={`px-10 lg:px-60   w-[100%] flex flex-col justify-center pb-21 transition-colors  duration-300 ${theme === 'dark' ? '' : ''} gap-10 lg:h-screen `}>
            {/* <ParticlesBackground /> */}

            <div className="flex lg:flex-row justify-between lg:mt-35  lg:p-0 pt-30 items-center flex-col gap-10">

                <div className={`lg:w-120 flex flex-col gap-3 `}>
                
                    <h1 className={`text-center lg:text-start font-bold lg:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#9538F2] via-[#7663F2] to-[#05AFF2] `}>Laís Sampaio</h1>
                    <hr className={`transition-colors  lg:m-0 mx-13 duration-300 ${theme === 'light' ? 'color-font-preto-30 ' : 'color-font-branco-30'}`}/>
                    <h2 className={`text-center text-[15px] lg:text-[19px] lg:text-start transition-colors duration-300 ${theme === 'light' ? 'color-font-preto-50 ' : 'color-font-branco-50'} `}>Desenvolvedor Full-Stack | Desenvolvimento Web</h2>
                
                    <p className={`text-center text-[16px] lg:text-[17px] lg:p-0 p-2.5 lg:text-start transition-colors duration-300 ${theme === 'light' ? 'color-font-preto-30 ' : 'color-font-branco-30'}`}>      Sou estudante do 5° semestre Engenharia de Software, apaixonada por tecnologia, lógica e inovação. Gosto de resolver problemas de forma criativa e analítica, sempre buscando aprender e evoluir.   Acredito no poder transformador da tecnologia e no impacto positivo que ela pode gerar.</p>
                </div>

                <div className="lg:mr-20 flex floating justify-center items-center rounded-[90rem] p-1 lg:w-2xs w-[12    rem] bg-[#9538F2]">
                    <Image
                    className=" rounded-[90rem] lg:w-2xs w-[15rem]"
                    src="/foto.jpg"
                    alt="Foto"
                    width={240} // ajuste conforme o tamanho real
                    height={240} // ajuste conforme o tamanho real
                    priority 
                    />
                </div>
            </div>
            <div className="flex lg:justify-start sm:justify-center text-[#9538F2] text-3xl gap-10 items-center w-full">


                <a 
                    href="#contact"
                    className="relative inline-block px-8 py-2 text-lg font-semibold text-white transition-transform transform rounded-full shadow-md bg-gradient-to-r from-[#9538F2] via-[#7663F2] to-[#05AFF2] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9538F2]"
                >
                    Entre em contato
                </a>
                <a className="hover:scale-150 transform duration-300" target="_blank" href="https://www.linkedin.com/in/laislimasampaio/"><FaLinkedin /></a> 

                <a className="hover:scale-150 transform duration-300" target="_blank" href="https://github.com/LaisLimaSampaio"><FaGithub /></a>
            
            </div>
        
      </section>
    );
}
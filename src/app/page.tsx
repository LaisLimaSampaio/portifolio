'use client'
import { useTheme  } from "@/app/ThemeProvider";
import Cabecalho from "@/components/Cabecalho";
import CardHabilidade from "@/components/CardHabilidade";
import ProjetoCard from "@/components/ProjetoCard";
import { useState, useEffect } from "react";
import { FaJava, FaHtml5, FaJs, FaCss3Alt, FaReact, FaGithub, FaGit, FaUserGraduate} from "react-icons/fa";
import { FaC, FaLinkedin } from "react-icons/fa6";
import { SiTypescript, SiSpringboot, SiIntellijidea   } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion"
import { RiTailwindCssFill } from "react-icons/ri";
import { projetos } from '@/data/projetos'
import { usePathname } from 'next/navigation';
import Contatos from "@/components/Contatos";
import ParticlesBackground from "@/components/ParticlesBackground";
import Footer from "@/components/Footer";
import Image from 'next/image';



export default function Home() {

  const { theme } = useTheme();
  const [opcaoHabilidade, setOpcaoHabilidade] = useState<string>('linguagens');
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
    
    <section id="about" className={` w-[100%] lg:p-0  transition-colors duration-300 h-screen ${theme === 'dark' ? 'dark' : 'light'}`}>

      <section id="aboutme" className={` lg:p-20  w-[100%]  flex flex-col justify-center pb-21 transition-colors  duration-300 ${theme === 'dark' ? 'dark' : 'light'} gap-10 items-center lg:h-screen `}>
        

        <div className="flex lg:flex-row lg:p-0 pt-30 items-center flex-col gap-10">

          <div className={`w-100 flex flex-col gap-3 `}>
          
            <h1 className={`text-center lg:text-start font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#9538F2] via-[#7663F2] to-[#05AFF2] `}>Laís Sampaio</h1>
            <hr className={`transition-colors  lg:m-0 mx-13 duration-300 ${theme === 'light' ? 'color-font-preto-30 ' : 'color-font-branco-30'}`}/>
            <h2 className={`text-center lg:text-start transition-colors duration-300 ${theme === 'light' ? 'color-font-preto-50 ' : 'color-font-branco-50'} `}>Desenvolvedor Full-Stack | Desenvolvimento Web</h2>
          
            <p className={`text-center lg:p-0 p-2.5 lg:text-start transition-colors duration-300 ${theme === 'light' ? 'color-font-preto-30 ' : 'color-font-branco-30'}`}>      Sou estudante do 5° semestre Engenharia de Software, apaixonada por tecnologia, lógica e inovação. Gosto de resolver problemas de forma criativa e analítica, sempre buscando aprender e evoluir.   Acredito no poder transformador da tecnologia e no impacto positivo que ela pode gerar.</p>
          </div>

          <div className="flex justify-center items-center rounded-[90rem] p-1 lg:w-2xs w-[15rem] bg-[#9538F2]">
            <Image
              className="rounded-[90rem] lg:w-2xs w-[15rem]"
              src="/foto.jpg"
              alt="Foto"
              width={240} // ajuste conforme o tamanho real
              height={240} // ajuste conforme o tamanho real
            />
          </div>
        </div>
        <div className="flex  text-[#9538F2] text-3xl gap-10 items-center justify-center w-full">

          <a className="hover:scale-150 transform duration-300" target="_blank" href="https://www.linkedin.com/in/laislimasampaio/"><FaLinkedin /></a> 
          <a className="hover:scale-150 transform duration-300" target="_blank" href="https://github.com/LaisLimaSampaio"><FaGithub /></a>
          <a 
            href="#contact"
            className="relative inline-block px-8 py-2 text-lg font-semibold text-white transition-transform transform rounded-full shadow-md bg-gradient-to-r from-[#9538F2] via-[#7663F2] to-[#05AFF2] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9538F2]"
          >
            Entre em contato
          </a>
          
        </div>
        
      </section>
      <section id="education" className={`w-[100%] flex justify-center items-center transition-colors duration-300  p-10 ${theme === 'dark' ? 'dark' : 'light'}`}>
        <div className="flex justify-start items-start flex-col gap-8">
          <div className={`flex flex-row gap-2 justify-center items-start`}>
            <div className="flex p-1 items-center justify-start">
              <FaUserGraduate />
            </div>
            <div className="flex justify-end flex-col ">
              <div className="flex flex-row gap-0.5 items-end  lg:gap-2.5">
                <p className="font-bold">Bacharelado em Engenharia de Software</p>
                <p className={`${theme  === 'dark' ? 'color-font-branco-30'  : 'color-font-preto-30 ' }  text-[12px]`}>Jul 2023 - Jul 2027</p>
              </div>
              <p className={`${theme  === 'dark' ? 'color-font-branco-30 '  : 'color-font-preto-30' } `}>Universidade Cesumar Instituição de ensino superior</p>
              <p className={`color-font-branco-30 ${theme  === 'dark' ? 'color-font-branco-30 '  : 'color-font-preto-30' }`}>Maringá, Paraná.</p>
            </div>
          </div>
          <div className={`flex flex-row gap-2 justify-center items-start `}>
            <div className="flex p-1 items-center justify-start">
              <FaUserGraduate />
            </div>
            <div className="flex justify-end flex-col ">
              <div className="flex flex-row items-end gap-2.5">
                <p className={`font-bold ${theme  === 'dark' ? 'color-font-branco '  : 'color-font-preto' }`}>Inglês</p>
                <p className={`${theme  === 'dark' ? 'color-font-branco-30'  : 'color-font-preto-30 ' }  text-[12px]`}>2016 - 2021</p>
              </div>
              <p className={`${theme  === 'dark' ? 'color-font-branco-30 '  : 'color-font-preto-30' } `}>Wise Up - Escola de Idiomas</p>
              <p className={`color-font-branco-30 ${theme  === 'dark' ? 'color-font-branco-30 '  : 'color-font-preto-30' }`}>Maringá, Paraná.</p>
            </div>
          </div>
        </div>
      
      </section>

      

      <section id="skills" className={`flex flex-col w-full h-[90vh] transition-colors duration-300 lg:p-0 p-5 ${theme === 'dark' ? 'dark' : 'light'}`}>


        <div className="lg:ml-30">
          <Cabecalho titulo="Habilidades"/>
        </div>
        

        <div className={`flex  items-center gap-0 lg:justify-between w-full h-[70vh] lg:px-90 lg:gap-0 `}>

          <div className="flex flex-col gap-0 rounded-lg lg:overflow-hidden ">
            <button 
              className={`${theme === 'dark' 
                ? opcaoHabilidade === 'linguagens' 
                  ? 'border-l-4 border-[#9538F2] text-[#9538F2] bg-[#282828]' 
                  : 'border-l-4 border-transparent text-[#C2C2C2] bg-[#282828] hover:bg-[#383838]' 
                : opcaoHabilidade === 'linguagens' 
                  ? 'border-l-4 border-[#9538F2] text-[#9538F2] bg-white' 
                  : 'border-l-4 border-transparent text-[#282828] bg-white hover:bg-gray-100'} 
                lg:px-8 lg:py-4 lg:w-full px-0 py-2 w-30 text-[16px] lg:text-[18px] text-lg font-medium transition-all duration-200 relative cursor-pointer`} 
              onClick={() => setOpcaoHabilidade('linguagens')}>
              Linguagens
            </button>

            <button 
              className={`${theme === 'dark' 
                ? opcaoHabilidade === 'ferramentas' 
                  ? 'border-l-4 border-[#9538F2] text-[#9538F2] bg-[#282828]' 
                  : 'border-l-4 border-transparent text-[#C2C2C2] bg-[#282828] hover:bg-[#383838]' 
                : opcaoHabilidade === 'ferramentas' 
                  ? 'border-l-4 border-[#9538F2] text-[#9538F2] bg-white' 
                  : 'border-l-4 border-transparent text-[#282828] bg-white hover:bg-gray-100'} 
                lg:px-8 lg:py-4 lg:w-full px-0 py-2 w-30 text-[16px] lg:text-[18px]  text-lg font-medium transition-all duration-200 relative cursor-pointer`} 
              onClick={() => setOpcaoHabilidade('ferramentas')}>
              Ferramentas
            </button>

            <button 
              className={`${theme === 'dark' 
                ? opcaoHabilidade === 'frameworks' 
                  ? 'border-l-4 border-[#9538F2] text-[#9538F2] bg-[#282828]' 
                  : 'border-l-4 border-transparent text-[#C2C2C2] bg-[#282828] hover:bg-[#383838]' 
                : opcaoHabilidade === 'frameworks' 
                  ? 'border-l-4 border-[#9538F2] text-[#9538F2] bg-white' 
                  : 'border-l-4 border-transparent text-[#282828] bg-white hover:bg-gray-100'} 
                lg:px-8 lg:py-4 lg:w-full px-0 py-2 w-30 text-[16px] lg:text-[18px]  text-lg font-medium transition-all duration-200 relative cursor-pointer`} 
              onClick={() => setOpcaoHabilidade('frameworks')}>
              Frameworks
            </button>
          </div>

          <div className="flex lg:m-0 ">
            <AnimatePresence mode='wait'>
              {opcaoHabilidade === 'linguagens' && (
                <motion.div
                  key="linguagens"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHabilidade
                    habilidades={[
                      { nome: "Java", logo: FaJava },
                      { nome: "HTML", logo: FaHtml5 },
                      { nome: "JavaScript", logo: FaJs },
                      { nome: "C", logo: FaC },
                      { nome: "CSS", logo: FaCss3Alt },
                      { nome: "Typescript", logo: SiTypescript }
                    ]}
                  />
                </motion.div>
              )}

              {opcaoHabilidade === 'ferramentas' && (
                <motion.div
                  key="ferramentas"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHabilidade
                    habilidades={[
                      { nome: "VSCode", logo: VscVscode },
                      { nome: "Intellij", logo: SiIntellijidea },
                      { nome: "GitHub", logo: FaGithub },
                      { nome: "Git", logo: FaGit }
                    ]}
                  />
                </motion.div>
              )}

              {opcaoHabilidade === 'frameworks' && (
                <motion.div
                  key="frameworks"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardHabilidade
                    habilidades={[
                      { nome: "React", logo: FaReact },
                      { nome: "Spring Boot", logo: SiSpringboot },
                      { nome: "Tailwind", logo: RiTailwindCssFill}
                    ]}
                  />

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="projects" className={`w-full  transition-colors duration-300 pb-20 lg:p-30 ${theme === 'dark' ? 'dark' : 'light'} `}>
        <Cabecalho titulo="Projetos"/>

        <div className={` text-center color-font-branco-50 lg:text-xl lg:pb-0 pb-7 pt-9`}>Explore meus projetos acadêmicos recentes</div>

          <div className={`flex justify-center items-center gap-7 lg:flex-wrap lg:flex-row lg:justify-between lg:px-50 lg:py-2 lg:gap-20 flex-col lg:mt-20`}>
            {projetos.map((projeto)=>(
              < ProjetoCard key={projeto.id} projeto= {projeto}/>
            ))}
          </div>  

      </section>
      <section id="contact" className={` flex flex-col justify-center items-center w-full h-screen`}>
            <ParticlesBackground />
            <Contatos />
      </section>
      <Footer />

    </section>

  );
}

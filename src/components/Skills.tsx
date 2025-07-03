'use client'
import { useTheme  } from "@/app/ThemeProvider";
import CardHabilidade from "@/components/CardHabilidade";
import { FaJava, FaHtml5, FaJs, FaCss3Alt, FaReact, FaGithub, FaGit} from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { SiTypescript, SiSpringboot, SiIntellijidea   } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion"
import { RiTailwindCssFill } from "react-icons/ri";
import { useState } from "react";
import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";

export default function Skills(){
    const { theme } = useTheme();
    const [opcaoHabilidade, setOpcaoHabilidade] = useState<string>('linguagens');
    return(
      <section id="skills" className={`flex flex-col w-full  lg:h-[110vh] pt-20  px-5 items-center justify-center transition-colors duration-300 lg:p-0  lg:pt-20 ${theme === 'dark' ? 'dark ' : 'light'} `}>
      

        <div className="flex text-center items-center align-middle ">
          <VscDebugBreakpointFunctionUnverified className="text-[#9538F2] text-[2rem]"/>
          <p className="text-[#9538F2]">SKILLS</p>
        </div>
      

        <div className="lg:w-[60%] text-center flex my-13 flex-col gap-2 ">
          <h1 className="text-[1.2rem] md:text-3xl font-bold"> Tecnologias que venho aprendendo e aplicando</h1>
          <h3 className={`md:text-2xl ${theme  === 'dark' ? 'color-font-branco-30 '  : 'color-font-preto-30' } transition-colors duration-300`}>Stacks que aplico em projetos acadêmicos e pessoais, buscando sempre melhorar a estrutura, usabilidade e desempenho das soluções.</h3>
        </div>


        <div className={`flex h-[50vh]  items-center justify-center md:gap-30 w-full lg:h-[70vh]  `}>

          <div className="flex flex-col bg-[#282828] p-1 gap-0 transition-all duration-200 rounded-lg lg:overflow-hidden  ">
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
    );
}
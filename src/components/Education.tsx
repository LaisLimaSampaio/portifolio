'use client'
import { useTheme  } from "@/app/ThemeProvider";
import {  FaUserGraduate} from "react-icons/fa";
import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";

export default function Education(){
    const { theme } = useTheme();
    return(
        <section id="education" className={`mb-[10rem]  shadow-[1px_0px_3px_rgba(255,255,255,0.08)] lg:mx-0 mx-10 rounded-3xl flex justify-center items-center transition-colors duration-300 gap-6 pt-6 pb-10 px-5 lg:px-15 flex-col ${theme === 'dark' ? 'dark' : 'light'}`}>
            <div className="flex text-center items-center align-middle">
                <VscDebugBreakpointFunctionUnverified className="text-[#9538F2] text-[2rem]"/>
                <p className="text-[#9538F2]">EDUCATION</p>
            </div>
            
            <div className="flex justify-start items-start flex-col gap-8">
                <div className={`flex flex-row gap-2 justify-center items-start`}>
                    <div className="flex p-1 items-center justify-start">
                        <FaUserGraduate />
                    </div>
                    <div className="flex justify-end flex-col ">
                        <div className=" flex flex-row gap-4 items-end  lg:gap-2.5 ">
                            <p className=" font-bold">Bacharelado em Engenharia de Software  
                                <span className={`${theme  === 'dark' ? 'color-font-branco-30'  : 'color-font-preto-30 ' } text-[12px]`}>  |   2023-2027</span>
                            </p>
                          
                        </div>
                        <p className={`${theme  === 'dark' ? 'color-font-branco-30 '  : 'color-font-preto-30' } `}>Universidade Cesumar Instituição de ensino superior</p>
                        <p className={`color-font-branco-30 ${theme  === 'dark' ? 'color-font-branco-30 '  : 'color-font-preto-30' } ]`}>Maringá, Paraná.</p>
                    </div>
                </div>

                <div className={`flex flex-row gap-2 justify-center items-start `}>
                    <div className="flex p-1 items-center justify-start">
                        <FaUserGraduate />
                    </div>
                    <div className="flex justify-end flex-col ">
                        <div className="flex flex-row items-end gap-2.5">
                        <p className={`font-bold ${theme  === 'dark' ? 'color-font-branco '  : 'color-font-preto' }`}>Inglês 
                            <span className={`${theme  === 'dark' ? 'color-font-branco-30'  : 'color-font-preto-30 ' }  text-[12px]`}>  | 2016 - 2021</span>
                        </p>
                 
                        </div>
                        <p className={`${theme  === 'dark' ? 'color-font-branco-30 '  : 'color-font-preto-30' } `}>Wise Up - Escola de Idiomas</p>
                        <p className={`color-font-branco-30 ${theme  === 'dark' ? 'color-font-branco-30 '  : 'color-font-preto-30' }`}>Maringá, Paraná.</p>
                    </div>
                </div>
            </div>
        
        </section>
    );
}
'use client'
import { Projeto } from "@/interfaces/Projeto"
import Image from "next/image"; 
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useTheme  } from "@/app/ThemeProvider";

export default function ProjetoCard({projeto}:{projeto:Projeto}){

    const { theme } = useTheme();

    return(
        <div className={`
            ${theme === 'dark' ? 'bg-[#282828]' : 'bg-white'}
            flex flex-col 
             bg-opacity-30 
            rounded-[8px] overflow-hidden
            lg:w-[25rem] 
            lg:h-[20rem] 
            w-[20rem]
            h-[20rem]
            transition-colors duration-300`}>

            <div className={`relative h-[20rem] w-full group `}>
                <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    fill
                    className="transition-transform object-cover group-hover:scale-105  duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="object-cover h-[103%] absolute inset-0 bg-[#000000a3] bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link 
                        href={`/projetos/${projeto.id}`}
                        className="bg-[#9538F2] font-bold rounded-[20px] py-2 px-4 text-white transition-all duration-300 hover:scale-110 hover:bg-opacity-90"
                    >
                        Ver Detalhes
                    </Link>
                </div>
            </div>

            <div className={`flex flex-col p-2 gap-3 lg:p-5 h-[50%] lg:gap-5 text-[10px] lg:text-[12px]`}>

                <p className="font-bold text-[14px]">{projeto.titulo}</p>

                <p className={`color-font-preto-30`}>{projeto.descricao}</p>

                <div className="flex justify-between w-full">

                    {projeto.fronted &&  <a className="bg-[#9538F2] font-bold rounded-[20px] py-1.5 px-1.5 text-center w-[30%] transition-transform duration-300 hover:scale-115"  target="_blank" href={projeto.linkDemo}>Ver Projeto</a>}

                    <a target="_blank" className=" transition-transform duration-300 rounded-[20px] hover:scale-115 font-bold flex gap-2 justify-center p-1.5 px-2.5 text-center items-center bg-[#9538F2]" href={projeto.linkRepo}> <FaGithub /> Ver código fonte</a>        

                   

                </div>

            </div>
        </div>
    );
}
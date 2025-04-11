'use client';

import { Habilidades } from "@/interfaces/Habilidades";
import { useTheme  } from "@/app/ThemeProvider";

export default function CardHabilidade({habilidades }: { habilidades: Habilidades[] }) {

    const { theme } = useTheme();

    return (
    
            <div className={`flex flex-wrap justify-center w-60 items-center lg:w-75 gap-2  rounded-3xl${theme  === 'light' && 'bg-[#9538F2] color-font-preto ' }`}>

                {habilidades.map((hab) => {

                const Icon = hab.logo; 

                return (

                    <div key={hab.nome} className={`flex text-[16px] lg:h-35 lg:w-35 w-22 h-22 flex-col hover:shadow-[0px_1px_6px_#9538F2] transition duration-300 items-center justify-center  ${theme  === 'dark' ? 'text-[#9538F2] bg-[#282828] border border-[#282828c0] ' : 'color-font-branco shadow-2 bg-[#9538F2] border border-[#8232d2] '} rounded`}>

                        <Icon className="lg:text-5xl text-3xl font-bold" /> 

                        <span className="mt-2 font-bold text-center">{hab.nome}</span>

                    </div>

                );
                })}

            </div>
    );
}
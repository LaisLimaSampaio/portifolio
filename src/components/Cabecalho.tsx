'use client'

import ScrollProgressSmall from "@/components/ScrollProgressSmall";
import { useTheme  } from "@/app/ThemeProvider";

export default function Cabecalho({titulo}:{titulo:string}){

    const { theme } = useTheme();

    return(
        <div className={`flex items-center justify-between gap-10 lg:px-50 px-2 py-9 text-center`}>
            <h1 className={` font-bold text-transparent bg-clip-text bg-gradient-to-r ${theme === 'dark' ? 'color-font-branco': 'color-font-preto' } [text-shadow:_0_2px_8px_rgba(0,0,0,0.3)] text-[27px]`}>{titulo}</h1>
            <ScrollProgressSmall />
        </div>
    );
}
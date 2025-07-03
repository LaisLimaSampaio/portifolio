'use client'

import ScrollProgressSmall from "@/components/ScrollProgressSmall";

export default function Cabecalho(){


    return(
        <div className={`flex items-center justify-between gap-10 lg:px-0 px-2 py-9 text-center`}>
            
            <ScrollProgressSmall />

        </div>
    );
}
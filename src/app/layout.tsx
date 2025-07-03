
import {Lato} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from 'react-hot-toast'
import ParticlesBackground from "@/components/ParticlesBackground";



const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: 'Laís Lima Sampaio | Desenvolvedora de Software',
  description: 'Portfólio de Laís Lima Sampaio, estudante de Engenharia de Software e desenvolvedora apaixonada por tecnologia, inovação e impacto social.',
  openGraph: {
    title: 'Laís Lima Sampaio | Desenvolvedora de Software',
    description: 'Veja os projetos desenvolvidos por Laís e conheça mais sobre sua trajetória como futura engenheira de software.',
    url: 'https://portifolio-lais.vercel.app', // coloque a URL real aqui
    siteName: 'Portfólio Laís Sampaio',
    images: [
      {
        url: 'https://portifolio-lais.vercel.app/anime.png', // imagem hospedada (pode ser da pasta /public)
        width: 1200,
        height: 630,
        alt: 'Imagem do portfólio de Laís Lima Sampaio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laís Lima Sampaio | Desenvolvedora de Software',
    description: 'Conheça o portfólio de Laís, com projetos em Java, React, e muito mais.',
    images: ['https://portifolio-lais.vercel.app/anime.png'], // mesma imagem ou outra se quiser
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
      <body className={`${lato.className}  overflow-x-hidden antialiased black-bg color-font-branco `}>
        <ParticlesBackground />
        <Toaster position="top-center" reverseOrder={false} />
        <Header/>
        {children}
        
        
      </body>
      
    </html>
    </ThemeProvider>
  );
}

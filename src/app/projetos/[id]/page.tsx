

import { projetos } from '@/data/projetos'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaArrowLeft, FaGithub } from 'react-icons/fa'

interface Props {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return projetos.map((projeto) => ({
    id: projeto.id
  }))
}

export default function ProjetoPage({ params }: Props) {
  const projeto = projetos.find((p) => p.id === params.id)

  if (!projeto) return notFound()

  return (
    <div className="min-h-screen mt-7 px-6 pb-10 pt-24 md:px-16">
        <Link
          href="/#projetos"
          className="text-[#9538F2] hover:text-[#8528E2] w-50  flex items-center gap-2 p-3.5 cursor-pointer"
        >
          <FaArrowLeft /> Voltar para projetos
        </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <Image
            src={projeto.imagem}
            alt={projeto.titulo}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{projeto.titulo}</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">{projeto.descricao}</p>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tecnologias</h2>
            <div className="flex flex-wrap gap-2">
              {projeto.tecnologias.map((tech, index) => (
                <span key={index} className="bg-[#9538F2] text-white px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            {projeto.linkDemo && (
              <a
                href={projeto.linkDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9538F2] text-white px-6 py-2 rounded-lg hover:bg-[#8528E2] transition-colors text-center"
              >
                Ver Projeto
              </a>
            )}
            <a
              href={projeto.linkRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9538F2] text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#8528E2] hover:scale-105 transition-transform text-center"
            >
              <FaGithub /> Código Fonte
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold">Detalhes do Projeto</h2>
        <hr className="border-gray-300 dark:border-gray-700" />

        {projeto.id === '1' && (
          <p className="text-gray-700 dark:text-gray-300">
            Sistema de gerenciamento de produtos de um mercado, feito com HTML, CSS e JavaScript. Permite operações CRUD e persistência em LocalStorage.
          </p>
        )}

        {projeto.id === '2' && (
          <p className="text-gray-700 dark:text-gray-300">
            API REST em Spring Boot com autenticação JWT e banco em memória (H2). Simula fluxo Kanban com controle de tarefas.
          </p>
        )}

        {projeto.id === '3' && (
          <p className="text-gray-700 dark:text-gray-300">
            Um gerenciador de tarefas em React com Tailwind, usando hooks e estados para criar, concluir e excluir tarefas.
          </p>
        )}

        {projeto.id === '4' && (
          <p className="text-gray-700 dark:text-gray-300">
            Jogo da forca rodando no terminal, com comunicação cliente-servidor via sockets TCP/IP usando Java.
          </p>
        )}

        {projeto.id === '5' && (
          <p className="text-gray-700 dark:text-gray-300">
            API para sistema de suporte técnico, com funcionalidades CRUD usando Spring Boot e banco H2.
          </p>
        )}
      </div>
    </div>
  )
}

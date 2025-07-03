import { projetos } from '@/data/projetos'
import { notFound } from 'next/navigation'
import ProjetoDetalhesClient from './ProjetoDetalhesClient'



export async function generateStaticParams() {
  return projetos.map((projeto) => ({
    id: projeto.id,
  }))
}

export default function ProjetoPage({ params }: { params: { id: string } }) {
  
  const projeto = projetos.find((p) => p.id === params.id)

  if (!projeto) return notFound()

  return <ProjetoDetalhesClient projeto={projeto} />
}

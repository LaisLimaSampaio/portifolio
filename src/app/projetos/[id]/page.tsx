import { projetos } from '@/data/projetos'
import { notFound } from 'next/navigation'
import ProjetoDetalhesClient from './ProjetoDetalhesClient'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return projetos.map((projeto) => ({
    id: projeto.id,
  }))
}

export default async function ProjetoPage({ params }: Props) {
  const projeto = projetos.find((p) => p.id === params.id)

  if (!projeto) return notFound()

  return <ProjetoDetalhesClient projeto={projeto} />
}

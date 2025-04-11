export interface Projeto {
    id: string
    titulo: string
    descricao: string
    detalhes?: string;
    tecnologias: string[]
    imagem: string
    linkDemo?: string  
    linkRepo?: string
    fronted: boolean
  }
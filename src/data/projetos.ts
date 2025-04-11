// data/projetos.ts
import { Projeto } from '@/interfaces/Projeto'

export const projetos: Projeto[] = [
  
  {
    id: "1",
    titulo: "Marketplace de doces",
    descricao: "Projeto FrontEnd vanilla desenvolvido para aplicar os conceitos de CRUD (Criar, Ler, Atualizar e Deletar) dados em uma aplicação.",
    tecnologias: ["HTML", "JavaScript", "CSS"],
    imagem: "/mercado.png",
    linkDemo: "https://site-mercado-market-website-crud-implementation.vercel.app/home.html",
    linkRepo: "https://github.com/LaisLimaSampaio/Site_Mercado-Market_Website-CRUD-Implementation",
    fronted: true
  },

  {
    id: "2",
    titulo: "Sistema de Gerenciamento de Tarefas Kanban",
    descricao: "Este projeto consiste em uma API REST desenvolvida em Spring Boot para gerenciamento de tarefas utilizando a metodologia Kanban.",
    tecnologias: ["Java", "Spring Boot", "H2 Database", "JWT (JSON Web Tokens)", "API REST"],
    imagem: "/backendKanban.png",
    linkRepo: "https://github.com/LaisLimaSampaio/Kanban",
    fronted: false
  },

  {
    id: "3",
    titulo: "Gerenciador de Tarefas",
    descricao: "Um gerenciador de tarefas CRUD em React, permitindo criar, visualizar e excluir tarefas de forma intuitiva.",
    tecnologias: ["React", "JavaScript", "CSS"],
    imagem: "/gerenciadorTarefas.png",
    linkDemo: "https://task-manager-react-gilt.vercel.app/",
    linkRepo: "https://github.com/LaisLimaSampaio/Task-Manager-React",
    fronted: true
  },
  {
    id: "4",
    titulo: "Jogo da Forca com Comunicação via Socket",
    descricao: "Back-end em Java que simula um jogo da forca com comunicação cliente-servidor via sockets TCP/IP.",
    tecnologias: ["Java", "Sockets TCP/IP", "Threads", "Programação Orientada a Objetos"],
    imagem: "/hangman-socket.png", // Você pode colocar o caminho correto da imagem se quiser exibir uma
    linkRepo: "https://github.com/LaisLimaSampaio/Hangman-Game-with-Socket-Communication",
    fronted: false
  },
  {
    id: "5",
    titulo: "Sistema de Suporte - CRUD em Java",
    descricao: "API REST em Java para gerenciamento de chamados de suporte técnico, com operações de criação, leitura, atualização e exclusão.",
    tecnologias: ["Java", "Spring Boot", "Maven", "API REST"],
    imagem: "/suporte-crud.png", // Substitua pelo caminho correto da imagem, se disponível
    linkRepo: "https://github.com/LaisLimaSampaio/Suporte",
    fronted: false
  }

]
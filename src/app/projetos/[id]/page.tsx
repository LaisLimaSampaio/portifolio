'use client'

import { projetos } from '@/data/projetos'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'
import { useTheme } from "@/app/ThemeProvider";

export default function DetalhesProjeto() {
  const { theme } = useTheme();
  const params = useParams();
  const projeto = projetos.find(proj => proj.id === params.id);

  if (!projeto) {
    return (
      <div className="min-h-screen p-8 flex flex-col items-center justify-center w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
        <Link
          href="/#projetos"
          className="text-[#9538F2] hover:text-[#8528E2] flex items-center gap-2"
        >
          <FaArrowLeft /> Voltar para projetos
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen px-4 pb-10 pt-30 md:px-16 transition-colors duration-300 ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Link
        href="/#projects"
        className="flex items-center gap-2 mb-8 text-[#9538F2] hover:text-[#8528E2]"
      >
        <FaArrowLeft /> Voltar para Projetos
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
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
          <p className={`text-lg transition-colors duration-300 ${theme === 'dark' ? 'color-font-branco-30' : 'color-font-preto-30'}`}>
            {projeto.descricao}
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tecnologias Utilizadas</h2>
            <div className="flex flex-wrap gap-2">
              {projeto.tecnologias.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#9538F2] text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

      <h1 className="font-bold p-3 text-2xl">Detalhes do projeto</h1>
      <hr className={`transition-colors duration-300 ${theme === 'light' ? 'color-font-preto-30' : 'color-font-branco-30'}`} />

            {projeto.id === "2" && 
                <div className="space-y-8">
                
                
                <div className="pt-9">
      
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    API REST desenvolvida em Spring Boot para gerenciamento de tarefas usando metodologia Kanban. 
                    Controle de tarefas em diferentes estágios (A Fazer, Em Progresso, Concluído) com operações CRUD completas.
                  </p>

                </div>
              
               
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-purple-500">Funcionalidades Chave</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <h4 className="text-xl font-medium text-purple-400">🔧 Operações CRUD</h4>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li><code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">POST /task</code> - Criação de tarefas</li>
                        <li><code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">GET /task/{"{id}"}</code> - Busca específica</li>
                        <li><code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">PUT /task/{"{id}"}</code> - Atualização</li>
                        <li><code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">DELETE /task/{"{id}"}</code> - Exclusão</li>
                      </ul>
                    </div>
              
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                      <h4 className="text-xl font-medium text-purple-400">📊 Fluxo Kanban</h4>
                      <div className="mt-2 space-y-2">
                        <p className="flex items-center gap-2">
                          <span className="text-purple-300">➔</span>
                          Movimentação via <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">PUT /task/{"{id}"}/move</code>
                        </p>
                        <div className="flex gap-4 mt-2">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">A Fazer</span>
                          <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full">Em Processo</span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full">Concluído</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">🔒 Segurança</h3>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">🛡️</span>
                      <span className="font-medium">Autenticação JWT</span>
                    </div>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Endpoint <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">POST /login</code> para tokens</li>
                      <li>Proteção OAuth2 em todas as rotas</li>
                      <li>Validação de token em cada requisição</li>
                    </ul>
                  </div>
                </div>
              
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">💾 Banco de Dados</h3>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                    Configuração H2:<br/>
                    URL: jdbc:h2:mem:testdb<br/>
                    Usuário: sa<br/>
                    Senha: [nenhuma]<br/>
                    Console: /h2-console
                  </pre>
                </div>
              
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">🧪 Testes & Documentação</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-2xl">✅</span>
                      <span>Testes com Postman</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-2xl">📄</span>
                      <span>Scripts Kanban</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-2xl">📂</span>
                      <span>Coleção Postman</span>
                    </div>
                  </div>
                </div>
              
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">🏗️ Arquitetura</h3>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-medium mb-2">Padrão MVC</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <span className="text-purple-400">🎮</span>
                            Controller: Endpoints REST
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-purple-400">⚙️</span>
                            Service: Lógica de negócio
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-purple-400">💽</span>
                            Repository: Acesso a dados
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              
                <p className="italic text-gray-600 dark:text-gray-400 mt-6">
                  Demonstra competências em desenvolvimento backend Spring Boot, segurança JWT e design de APIs RESTful
                </p>
              </div>
            }

            {projeto.id === "1" && <div className="space-y-8">
       
        
            <div className="space-y-4 pt-9">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                Website de mercado desenvolvido durante as aulas de Engenharia de Software, implementando operações CRUD (Create, Read, Update, Delete) usando HTML, CSS e JavaScript puro.
                </p>
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-purple-500">🔑 Acesso Administrativo</h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <span className="font-medium">Usuário:</span>
                    <code className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Nelson</code>
                    </div>
                    <div>
                    <span className="font-medium">Senha:</span>
                    <code className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">1234</code>
                    </div>
                </div>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-purple-500">Funcionalidades Principais</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <h4 className="text-xl font-medium text-purple-400">🛒 CRUD de Produtos</h4>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><span className="font-medium">Create:</span> Adicionar novos produtos</li>
                    <li><span className="font-medium">Read:</span> Listagem completa de produtos</li>
                    <li><span className="font-medium">Update:</span> Edição de informações</li>
                    <li><span className="font-medium">Delete:</span> Remoção de itens</li>
                    </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <h4 className="text-xl font-medium text-purple-400">🔐 Sistema de Autenticação</h4>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Acesso restrito para edição</li>
                    <li>Validação de credenciais</li>
                    <li>Proteção de rotas sensíveis</li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-purple-500">🛠 Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200 rounded-full">HTML5</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200 rounded-full">CSS3</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200 rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200 rounded-full">LocalStorage</span>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-purple-500">⚙️ Implementação</h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="space-y-4">
                    <div>
                    <h4 className="font-medium">Estrutura de Dados</h4>
                    <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded mt-2 text-sm">
            {`Produto = {
            produto: string,
            descrição: string,
            preco: string,
            foto: string
            }`}</pre>
                    </div>
                    
                    <div>
                    <h4 className="font-medium">Exemplo de Operação</h4>
                    <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded mt-2 text-sm">
            {`function adicionarProduto(novoProduto) {
    const produtos = JSON.parse
    (localStorage.getItem('produtos')) || [];
    produtos.push(novoProduto);
    localStorage.setItem('produtos',
     JSON.stringify(produtos));
    }`}</pre>
                    </div>
                </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-purple-500">📚 Fluxo de Trabalho</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <span className="text-2xl">🔒</span>
                    <span>Login de Administrador</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <span className="text-2xl">📦</span>
                    <span>Gestão de Produtos</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <span className="text-2xl">🔄</span>
                    <span>Persistência de Dados</span>
                </div>
                </div>
            </div>

            <p className="italic text-gray-600 dark:text-gray-400 mt-6">
                Projeto desenvolvido para prática de conceitos fundamentais de desenvolvimento web e manipulação de dados no cliente.
            </p>
            </div>}
            {projeto.id === "3" && (
              <div className="space-y-12 pt-10">
                <div className="space-y-4">
                  <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                    📋 Task Manager - React + Tailwind
                  </h2>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Este é um projeto simples de <strong>gerenciador de tarefas</strong> desenvolvido com <strong>React.js</strong> e estilizado com <strong>Tailwind CSS</strong>, criado com o objetivo de <strong>praticar e entender o funcionamento básico do React</strong>. Nele, explorei conceitos como <strong>componentes, props, estado (useState)</strong> e renderização condicional.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}`}>
                    🚀 Funcionalidades
                  </h3>
                  <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Adição de novas tarefas</li>
                    <li>Marcação de tarefas como concluídas</li>
                    <li>Exclusão de tarefas</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}`}>
                    🛠️ Tecnologias
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {['React', 'JavaScript', 'Tailwind CSS'].map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm text-center shadow-sm ${
                          theme === 'dark'
                            ? 'bg-purple-900 text-purple-300'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}`}>
                    👩‍💻 Objetivo
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Este projeto foi desenvolvido como parte do meu processo de aprendizagem em <strong>React</strong>, com foco na prática de conceitos fundamentais da biblioteca, na construção de uma interface funcional e intuitiva, e na experimentação com a estilização moderna e utilitária proporcionada pelo <strong>Tailwind CSS</strong>.
                  </p>
                </div>
              </div>
            )}


            {projeto.id === "4" && (
              <div className="space-y-12 pt-10">
                <div className="space-y-4">
                  <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                    🎮 Jogo da Forca - Comunicação com Sockets
                  </h2>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Este projeto é uma aplicação console do clássico <strong>Jogo da Forca</strong> com comunicação cliente-servidor utilizando <strong>Sockets em Java</strong>. Foi desenvolvido para <strong>explorar conceitos de redes, concorrência e troca de mensagens entre aplicações</strong>.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}`}>
                    🚀 Funcionalidades
                  </h3>
                  <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Jogador cliente envia palpites de letras ao servidor</li>
                    <li>Servidor gerencia a palavra secreta e envia atualizações do jogo</li>
                    <li>Tratamento de acertos, erros e fim de jogo</li>
                    <li>Execução simples via terminal</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}`}>
                    🛠️ Tecnologias
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {['Java', 'Sockets', 'Programação Concorrente', 'Aplicação Console'].map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm text-center shadow-sm ${
                          theme === 'dark'
                            ? 'bg-purple-900 text-purple-300'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}`}>
                    👩‍💻 Objetivo
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    O objetivo deste projeto foi <strong>compreender na prática o funcionamento da comunicação via sockets em Java</strong>, além de exercitar a lógica de programação e a estrutura de comunicação entre aplicações cliente e servidor.
                  </p>
                </div>
              </div>
            )}


            {projeto.id === "5" && (
              <div className="space-y-12 pt-10">
                <div className="space-y-4">
                  <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                    🛠️ Sistema de Chamados - Spring Boot
                  </h2>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Projeto simples de <strong>gerenciamento de chamados</strong> desenvolvido com <strong>Spring Boot</strong>, com o objetivo de praticar a criação de uma API RESTful utilizando Java e operações básicas de CRUD.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}`}>
                    🚀 Funcionalidades
                  </h3>
                  <ul className={`list-disc pl-6 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Cadastro de usuários</li>
                    <li>Abertura e acompanhamento de chamados</li>
                    <li>Atualização e exclusão de registros</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}`}>
                    🛠️ Tecnologias
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {['Java', 'Spring Boot', 'API REST', 'H2 Database'].map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm text-center shadow-sm ${
                          theme === 'dark'
                            ? 'bg-purple-900 text-purple-300'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}`}>
                    👩‍💻 Objetivo
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    O projeto foi desenvolvido como parte da minha aprendizagem prática em <strong>Spring Boot</strong>, com foco na construção de APIs REST e no uso de banco de dados em memória para persistência de dados durante o desenvolvimento.
                  </p>
                </div>
              </div>
            )}






           



            
        </div>
    )
}
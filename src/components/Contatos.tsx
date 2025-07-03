'use client'

import { useState } from "react"
import { useTheme } from "@/app/ThemeProvider";
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser'
import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";

export default function Contatos(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submit, setSubmit] = useState(false)

    const { theme } = useTheme();

    function validarDados(): boolean {

        const mensagensErro: string[] = [];

        // Validação do nome
        if (name.trim() === '') {
            mensagensErro.push("Por favor, digite seu nome.");
        } else if (name.trim().length < 2) {
            mensagensErro.push("O nome deve ter pelo menos 2 caracteres.");
        }

        // Validação do e-mail
        if (email.trim() === '') {
            mensagensErro.push("Por favor, digite seu email.");
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                mensagensErro.push("Por favor, digite um email válido.");
            }
        }

        // Validação da mensagem
        if (message.trim() === '') {
            mensagensErro.push("Por favor, digite sua mensagem.");
        } else if (message.trim().length < 10) {
            mensagensErro.push("A mensagem deve ter pelo menos 10 caracteres.");
        }

        // Exibir toasts se houver erros
        if (mensagensErro.length > 0) {
            mensagensErro.forEach((msg, index) => {
                setTimeout(() => toast.error(msg), index * 150); // espaçamento entre toasts
            });
            return false;
        }

        return true;
    }

    function sendEmail(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        
        if(validarDados()){
            setSubmit(true);

            const templateParams = {
                name: name,
                message: message,
                email: email
            }
            emailjs.send("service_3vzfg2j","template_le9zi57",templateParams, "htyeTozriMbli57wk")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text)
                setName('')
                setEmail('')
                setMessage('')
            }, (err) =>{
                console.log("ERRO: ",err)
            })


            toast.success("Mensagem enviada com sucesso!");
        }
        
    }

    const inputStyles = theme === 'dark'
        ? 'bg-[#1e1e1e] text-white placeholder-gray-400'
        : 'bg-white text-black placeholder-gray-500';

    const titleColor = theme === 'dark' ? 'text-white' : 'text-black';

    return (
        <div className="flex flex-col justify-center items-center w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36  gap-9">

            <div className="flex text-center justify-center items-center align-middle w-[100%] ">
                <VscDebugBreakpointFunctionUnverified className="text-[#9538F2] text-[2rem]"/>
                <p className="text-[#9538F2]">CONTACT</p>
            </div>
            <h1 className={`w-[100%] text-center sm:text-2xl font-bold ${titleColor}`}>Vamos conversar? Conecte-se comigo e compartilhe sua ideia.</h1>

            <form 
                onSubmit={(e)=>sendEmail(e)}
                className={`flex flex-col w-full max-w-2xl ${theme === 'dark' ? 'bg-[rgba(18,18,18,0.76)]' : 'bg-[#f0f0f0]'} justify-center items-center p-6 sm:p-8 rounded-3xl gap-5 shadow-lg`}
            >
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ring-[#9538F2] transition-all duration-300 ${inputStyles}`}
                />
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ring-[#9538F2] transition-all duration-300 ${inputStyles}`}
                />
                <textarea
                    rows={5}
                    placeholder="Digite sua mensagem aqui..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 ring-[#9538F2] transition-all duration-300 resize-none ${inputStyles}`}
                />

                <div className="relative w-[70%] sm:w-[50%] md:w-[40%] h-12 [perspective:1000px] mt-4">
                    <div className={`w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] ${submit ? "rotate-y-180" : ""}`}>
                        {/* Frente */}
                        <button
                            type="submit"
                            className="hover:scale-105 transform transition-all duration-300 absolute inset-0 w-full h-full cursor-pointer bg-[#9538F2] hover:bg-[#7c2ee0] text-white font-semibold flex items-center justify-center rounded-full [backface-visibility:hidden]  "
                        >
                            Enviar
                        </button>

                        {/* Verso */}
                        <button
                            type="button"
                            className="absolute inset-0 w-full h-full cursor-pointer bg-[#70ff45] text-[#121212] font-semibold flex items-center justify-center rounded-full rotate-y-180 [backface-visibility:hidden]"
                        >
                            Enviado
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

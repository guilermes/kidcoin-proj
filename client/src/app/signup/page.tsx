'use client'

import { useState } from "react";
import LandingPageMenu from "../components/LandingPageMenu";
import Footer from "../components/Footer";
import PrimaryBtnLG from "../components/PrimaryBtnLG";
import AlunoForm from "../components/AlunoForm";
import ProfessorForm from "../components/ProfessorForm";
import PrimaryBtn from "../components/PrimaryBtn";
import Image from "next/image";

export default function Signup() {
    const [tipoUsuario, setTipoUsuario] = useState(null);

    return (
        <div className="flex flex-col min-h-screen">
            <LandingPageMenu />
            
            <main className="flex flex-1 items-center justify-center p-4">
                
                {/* TELA DE SELEÇÃO INICIAL */}
                {!tipoUsuario && (
                    <div className="flex flex-col items-center gap-8">
                        <div className="flex justify-center">
                            <Image 
                                src="/assets/main-char.png" 
                                width={200} 
                                height={200} 
                                alt="Personagem principal"
                                className="object-contain"
                            />
                        </div>

                        {/* Container dos Botões */}
                        <div className="flex flex-row items-center gap-4">
                            <PrimaryBtnLG onClick={() => setTipoUsuario('Professor')}>
                                Sou Professor!
                            </PrimaryBtnLG>
                            
                            <span className="text-gray-400 font-bold">OU</span>
                            
                            <PrimaryBtnLG onClick={() => setTipoUsuario('Aluno')}>
                                Sou Aluno!
                            </PrimaryBtnLG>
                        </div>
                    </div>
                )}

                {/* FORMULÁRIO DE ALUNO */}
                {tipoUsuario === 'Aluno' && (
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-2xl font-bold">Cadastro de Aluno</h2>
                        <AlunoForm />
                        <PrimaryBtn onClick={() => setTipoUsuario(null)}>Voltar</PrimaryBtn>
                    </div>
                )}

                {/* FORMULÁRIO DE PROFESSOR */}
                {tipoUsuario === 'Professor' && (
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-2xl font-bold">Cadastro de Professor</h2>
                        <ProfessorForm />
                        <PrimaryBtn onClick={() => setTipoUsuario(null)}>Voltar</PrimaryBtn>
                    </div>
                )}
                
            </main>
            <Footer />
        </div>
    );
}
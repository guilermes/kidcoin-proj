'use client'

import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import { InputPass } from "../components/InputPass";
import { InputUser } from "../components/InputUser";
import { Button } from 'react-bootstrap';
import NavbarProfessor from "../components/NavbarProfessor";
import SecondaryBtn from "../components/SecondaryBtn";
import TertiaryBtn from "../components/TertiaryBtn";

export default function Login() {
    const router = useRouter();

    const paginaAluno = () => {
        router.push("/aluno")
    }

    const paginaProfessor = () => {
        router.push("/professor")
    }

    return (
        <>
            <NavbarProfessor />
            <div className="flex justify-center h-[80vh]">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className="text-4xl font-bold mb-6 text-center text-(--primary-font-color)">Bem-vindo professor</h2>
                    <span className="h-15 text-center">Selecione o que deseja fazer</span>
                    <ul className="flex flex-row gap-3">
                        <li>
                            <TertiaryBtn onClick={paginaAluno}>Cadastre um aluno</TertiaryBtn>
                        </li>
                        <li>
                            <SecondaryBtn onClick={paginaProfessor}>Faça uma consulta</SecondaryBtn>
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </>
    );
}
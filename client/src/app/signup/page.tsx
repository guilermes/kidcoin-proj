'use client'

import { useState } from "react";
import LandingPageMenu from "../components/LandingPageMenu";
import Footer from "../components/Footer";
import PrimaryBtnLG from "../components/PrimaryBtnLG";
import AlunoForm from "../components/AlunoForm";
import ProfessorForm from "../components/ProfessorForm";
import PrimaryBtn from "../components/PrimaryBtn";


export default function Signup() {
    const [tipoUsuario, setTipoUsuario] = useState(null);

    return (
        <>
        <LandingPageMenu></LandingPageMenu>
            {!tipoUsuario && (
                <>
                    
                    <PrimaryBtnLG onClick={() => { setTipoUsuario('Professor') }}>Sou Professor!</PrimaryBtnLG>
                    <PrimaryBtnLG onClick={() => { setTipoUsuario('Aluno') }}>Sou Aluno!</PrimaryBtnLG>
                </>
            )}
            {tipoUsuario === 'Aluno' && (<><AlunoForm /> <PrimaryBtn onClick={() => setTipoUsuario(null)}>Voltar</PrimaryBtn></>)}
            {tipoUsuario === 'Professor' && (<><ProfessorForm /> <PrimaryBtn onClick={() => setTipoUsuario(null)}>Voltar</PrimaryBtn></>)}
            <Footer></Footer>
        </>
    )
}
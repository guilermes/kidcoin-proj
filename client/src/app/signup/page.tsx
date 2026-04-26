'use client'

import { useState } from "react";
import LandingPageMenu from "../components/LandingPageMenu";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import PrimaryBtnLG from "../components/PrimaryBtnLG";
import AlunoForm from "../components/AlunoForm";
import ProfessorForm from "../components/ProfessorForm";


export default function Signup() {
    const { tipoUsuario, setTipoUsuario } = useState(null);

    return (
        <>
            <LandingPageMenu></LandingPageMenu>
            <PrimaryBtn onClick={setTipoUsuario('Professor')}>Sou Professor!</PrimaryBtn>
            <PrimaryBtnLG onClick={setTipoUsuario('Aluno')}>Sou Aluno!</PrimaryBtnLG>
            <>
                {tipoUsuario === 'Aluno' && <AlunoForm />}
                {tipoUsuario === 'Professor' && <ProfessorForm />}
            </>
            <Footer></Footer>
        </>
    )
}
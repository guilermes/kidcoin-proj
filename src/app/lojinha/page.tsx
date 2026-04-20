// app/lojinha/page.tsx  (ou onde estiver seu Lojinha)
"use client";

import NavbarProfessor from "../components/NavbarProfessor";
import Footer from "../components/Footer";
import AlunoInfoAtLojinha from "../components/AlunoInfoAtLojinha";
import AlunoSkinsLojaReal from "../components/AlunoSkinsLojaReal";
import NavbarAluno from "../components/NavbarAluno";
import useAvatar from "../hooks/useAvatar";

export default function Lojinha() {
  const { avatar, setAvatar } = useAvatar(); // persistência via localStorage

  return (
    <>
      <NavbarAluno />
      <span className="p-4"><a href="/aluno-perfil">❮❮ voltar</a></span>
      <main className="p-8 flex justify-center items-center gap-6">
        <AlunoInfoAtLojinha avatar={avatar} dinheiro={0} />
        <div className="flex flex-col justify-center items-center">
          {/* passa o setAvatar do hook */} 
          <AlunoSkinsLojaReal onSelecionarSkin={setAvatar} />
        </div>
      </main>
      <Footer />
    </>
  );
}

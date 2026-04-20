"use client";

import AlunoInfo from "../components/AlunoInfo";
import AlunoSkins from "../components/AlunoSkins";
import NavbarAluno from "../components/NavbarAluno";
import Footer from "../components/Footer";
import useAvatar from "../hooks/useAvatar";

export default function AlunoPerfil() {
  // hook que lê/salva o avatar no localStorage
  const { avatar, setAvatar } = useAvatar();

  return (
    <>
      <NavbarAluno />
      <main className="p-8 flex flex-col justify-center items-center">
        {/* exibe o avatar persistido */}
        <AlunoInfo avatar={avatar} />

        {/* permite trocar o avatar diretamente pelo seletor */}
        <AlunoSkins onSelecionarSkin={setAvatar} />
      </main>
      <Footer />
    </>
  );
}

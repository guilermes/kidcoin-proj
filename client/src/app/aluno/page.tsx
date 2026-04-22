"use client";

import { useState } from "react";
import LandingPageMenu from "../components/LandingPageMenu";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import NavbarProfessor from "../components/NavbarProfessor";
import TertiaryBtn from "../components/TertiaryBtn";

export default function CadastroAluno() {
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/aluno", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, apelido, dataNascimento, email, senha }),
    });

    const data = await res.json();
    alert(`Aluno cadastrado: ${data.nome}`);

    setNome("");
    setApelido("");
    setDataNascimento("");
    setEmail("");
    setSenha("");
  };

  return (
    <>
      <NavbarProfessor />
      <span className="p-4"><a href="/dashboard">❮❮ voltar</a></span>
      <div className="flex flex-col h-[80vh] justify-center items-center">
        <div className="max-w-md  p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-6 text-center">Cadastrar aluno</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="bg-white w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Apelido(user)"
              value={apelido}
              onChange={(e) => setApelido(e.target.value)}
              className="bg-white w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              className="bg-white w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="bg-white w-full p-2 border border-gray-300 rounded"
              required
            />
            <TertiaryBtn type="submit" onClick={() => { }}>Cadastrar</TertiaryBtn>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
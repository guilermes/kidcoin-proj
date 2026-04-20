"use client";

import { useEffect, useState } from "react";
import LandingPageMenu from "../components/LandingPageMenu";
import Footer from "../components/Footer";
import PrimaryBtn from "../components/PrimaryBtn";
import NavbarProfessor from "../components/NavbarProfessor";
import TertiaryBtn from "../components/TertiaryBtn";

interface Aluno {
  id: number;
  nome: string;
  apelido: string;
  dataNascimento: string;
  email: string;
  turma: string | null;
}

export default function AdicionarAluno() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [alunoSelecionado, setAlunoSelecionado] = useState<number | null>(null);
  const [turma, setTurma] = useState<string>("Sala A");

  useEffect(() => {
    fetch("/api/aluno")
      .then((res) => res.json())
      .then(setAlunos);
  }, []);

  const adicionarAluno = async () => {
    if (!alunoSelecionado) return alert("Selecione um aluno");

    const res = await fetch("/api/aluno", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ alunoId: alunoSelecionado, turma }),
    });

    const data = await res.json();
    alert(data.message);

    setAlunos((prev) =>
      prev.map((a) => (a.id === alunoSelecionado ? { ...a, turma } : a))
    );
  };

  return (
    <>
      <NavbarProfessor />
      <span className="p-4">
        <a href="/dashboard">❮❮ voltar</a>
      </span>
      <div className="flex justify-center h-[80vh]">
        <div className="mb-auto max-w-3xl mx-auto mt-10 p-6 rounded-lg ">
          <h2 className="text-4xl font-bold mb-6 text-center">
           Consulta de alunos
          </h2>
          <p className="h-15 text-center">
            Aqui você pode adicionar alunos a salas
          </p>
          <div className="flex gap-4 mb-4">
            <select
              onChange={(e) => setAlunoSelecionado(Number(e.target.value))}
              className="flex-1 p-2 border bg-white border-gray-300 rounded"
            >
              <option value="">Selecione um aluno</option>
              {alunos.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.nome} ({a.apelido}){" "}
                  {a.turma ? `(Já na turma ${a.turma})` : ""}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Nome da turma"
              value={turma}
              onChange={(e) => setTurma(e.target.value)}
              className="flex-1 p-2 border bg-white border-gray-300 rounded"
            />

            <TertiaryBtn onClick={adicionarAluno}>
              Adicionar
            </TertiaryBtn>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

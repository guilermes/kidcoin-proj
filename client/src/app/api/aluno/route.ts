import { NextResponse } from "next/server";

//depois aqui vai precisar puxar os dados que vão estar no banco de dados
let alunos: {
  id: number;
  nome: string;
  apelido: string;
  dataNascimento: string;
  email: string;
  senha: string;
  turma: string | null;
}[] = [];

let ultimoId = 0;


export async function GET() {
  const alunosSemSenha = alunos.map(({ senha, ...rest }) => rest);
  return NextResponse.json(alunosSemSenha);
}


export async function POST(request: Request) {
  const { nome, apelido, dataNascimento, email, senha } = await request.json();

  const novoAluno = {
    id: ++ultimoId,
    nome,
    apelido,
    dataNascimento,
    email,
    senha,
    turma: null,
  };

  alunos.push(novoAluno);


  const { senha: _, ...alunoSemSenha } = novoAluno;
  return NextResponse.json(alunoSemSenha);
}

// PATCH -> adiciona aluno a uma turma
export async function PATCH(request: Request) {
  const { alunoId, turma } = await request.json();

  const aluno = alunos.find(a => a.id === alunoId);
  if (!aluno) {
    return NextResponse.json({ message: "Aluno não encontrado" }, { status: 404 });
  }

  aluno.turma = turma;

  const { senha: _, ...alunoSemSenha } = aluno;
  return NextResponse.json({ message: "Aluno adicionado à turma!", aluno: alunoSemSenha });
}
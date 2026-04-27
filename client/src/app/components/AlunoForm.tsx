import { useState } from "react";
import { Form } from "react-bootstrap";
import PrimaryBtn from "./PrimaryBtn";

export default function AlunoForm() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const alunoSubmit = async (e) => {
        if (e) e.preventDefault();

        if (formData.senha !== formData.confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/cadastro/aluno", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome: formData.nome,
                    email: formData.email,
                    senha: formData.senha
                }),
            });

            if (response.ok) {
                const resultado = await response.json();
                alert("Aluno cadastrado com sucesso!");
                console.log(resultado);
            } else {
                alert("Erro ao cadastrar aluno.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro de conexão com o servidor.");
        }
    };

    return (
        <>
            <Form onSubmit={alunoSubmit}>
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label>Senha:</label>
                <input
                    type="password"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                />

                <label>Confirme sua senha:</label>
                <input
                    type="password"
                    name="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                />
                <PrimaryBtn onClick={()=>alunoSubmit}>Cadastrar</PrimaryBtn>
            </Form>
        </>
    );
}
import { useState } from "react";
import { Form } from "react-bootstrap";
import PrimaryBtn from "./PrimaryBtn";

export default function ProfessorForm() {
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

    const professorSubmit = async (e) => {
        if (e) e.preventDefault();

        if (formData.senha !== formData.confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/cadastro/professor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nome: formData.nome,
                    email: formData.email,
                    senha: formData.senha
                }),
            });

            if (response.ok) {
                alert("Professor cadastrado com sucesso!");
            } else {
                alert("Erro ao cadastrar professor.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro de conexão com o servidor.");
        }
    };

    const inputStyle = "w-full p-2 mb-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black";

    return (
        <Form
            onSubmit={professorSubmit}
            className="flex flex-col w-full max-w-md p-6 bg-gray-50 rounded-xl shadow-sm"
        >
            <label className="mb-1 font-semibold text-gray-700">Nome:</label>
            <input
                type="text"
                name="nome"
                className={inputStyle}
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
            />

            <label className="mb-1 font-semibold text-gray-700">Email:</label>
            <input
                type="email"
                name="email"
                className={inputStyle}
                value={formData.email}
                onChange={handleChange}
                placeholder="exemplo@email.com"
            />

            <label className="mb-1 font-semibold text-gray-700">Senha:</label>
            <input
                type="password"
                name="senha"
                className={inputStyle}
                value={formData.senha}
                onChange={handleChange}
                placeholder="********"
            />

            <label className="mb-1 font-semibold text-gray-700">Confirme sua senha:</label>
            <input
                type="password"
                name="confirmarSenha"
                className={inputStyle}
                value={formData.confirmarSenha}
                onChange={handleChange}
                placeholder="********"
            />

            <div className="mt-6 flex justify-center w-full">
                <PrimaryBtn type="submit">
                    Cadastrar
                </PrimaryBtn>
            </div>
        </Form>
    );
}
'use client'

import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import { InputPass } from "../components/InputPass";
import { InputUser } from "../components/InputUser";
import LandingPageMenu from "../components/LandingPageMenu";
import { useFormik } from "formik";
import PrimaryBtn from "../components/PrimaryBtn";

export default function Login() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        // 1. Chamada para a sua API de Login
        const response = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            senha: values.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          
          alert("Login realizado com sucesso!");

          if (data.tipo === "PROFESSOR") {
            router.push("/dashboard");
          } else {
            router.push("/aluno-perfil");
          }
        } else {
          alert(data.message || "Usuário ou senha inválidos");
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor:", error);
        alert("Erro de conexão com o servidor.");
      }
    },
  });

  const { handleSubmit, values, handleChange, errors } = formik;

  return (
    <>
      <LandingPageMenu />
      <div className="flex justify-center min-h-[80vh] items-center">
        <div className="flex flex-col items-center justify-center bg-gray-50 p-10 rounded-2xl shadow-sm">
          
          <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm">
            <h2 className="text-4xl text-gray-800 py-6 text-center">Faça seu login</h2>
            
            <InputUser 
              label={"E-mail:"} 
              inputName={"username"} 
              id={"username"} 
              value={values.email} 
              onChange={handleChange} 
              error={errors.email} 
            />
            
            <InputPass 
              label={"Senha:"} 
              inputName={"password"} 
              id={"password"} 
              value={values.password} 
              onChange={handleChange} 
              error={errors.password} 
            />

            <div className="flex flex-col items-center gap-4 mt-4">
              <PrimaryBtn type='submit'>Entrar</PrimaryBtn>
              <a href="/signup" className="text-blue-600 hover:underline">
                Não tem conta? Cadastre-se
              </a>
            </div>
          </form>

        </div>
      </div>
      <Footer />
    </>
  );
}
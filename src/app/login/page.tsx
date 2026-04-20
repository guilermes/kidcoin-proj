'use client'

import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import { InputPass } from "../components/InputPass";
import { InputUser } from "../components/InputUser";
import LandingPageMenu from "../components/LandingPageMenu"
import { Button } from 'react-bootstrap';
import { useFormik } from "formik";
import PrimaryBtn from "../components/PrimaryBtn";

export default function Login(){

    const router = useRouter();

    const toLoginPage = () => {
        router.push("/login")
  };

    interface FormValues {
    username?: string;
    password?: string;
  }

  //disponibiliza todas as funções necessárias para usar o formik
  const formik = useFormik<FormValues>({
    //valores iniciais do formulário
    initialValues: {
      username: "",
      password: "",
      
    },
    //validationSchema: loginSchema,
    //função disparada quando o formulario é enviado
    onSubmit: (values) => {
      console.log(values)
      if(values.username === "admin" && values.password === "admin123"){
        router.push("/dashboard");
      }
      if(values.username === "aluno" && values.password === "aluno123"){
        router.push("/aluno-perfil");
      }
    }
  });

  const { handleSubmit, values, handleChange, errors } = formik;

  console.log(errors);


    return(
        <>
            <LandingPageMenu />
            <div className="flex justify-center h-[80vh]">
                <div className="flex flx-col items-center justify-center ">
                  
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-4xl text-gray-800 py-3">Faça seu login</h2>
                        <InputUser label={"User"} inputName={"username"} id={"username"} value={values.username} onChange={handleChange} error={errors.username}/>
                        <InputPass label={"Senha"} inputName={"password"} id={"pasword"} value={values.password} onChange={handleChange} error={errors.password}/>
                        <ul className="flex flex-row gap-3">
                          <li><PrimaryBtn type='submit' onClick={() => {}}>Entrar</PrimaryBtn></li>
                          <li><a href="">Cadastre-se</a></li>
                        </ul>
                    </form>
                </div>
            </div>
           
            <Footer />
        </>
    );
}
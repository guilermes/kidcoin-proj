import { Form } from "react-bootstrap";
import Router from "react";
import PrimaryBtn from "./PrimaryBtn";

const router = Router;


export default function ProfessorForm() {
    return (
        <>
            <Form>
                <label>Nome:</label>
                <input type="text" name="nome" id="nome"></input>
                <label>CPF:</label>
                <input type="text" name="email" id="email"></input>
                <label>Email:</label>
                <input type="text" name="email" id="email"></input>
                <label>Senha:</label>
                <input type="password" name="senha" id="senha"></input>
                <label>Confirme sua senha:</label>
                <input type="password" name="senha" id="senha"></input>
            </Form>
            <PrimaryBtn>Cadastrar</PrimaryBtn>
        </>
    )
}
import { Form } from "react-bootstrap";


export default function AlunoForm() {
    return (
        <>
            <Form>
                <label>Nome:</label>
                <input type="text" name="nome" id="nome"></input>
                <label>Email:</label>
                <input type="text" name="email" id="email"></input>
                <label>Senha:</label>
                <input type="password" name="senha" id="senha"></input>
                <label>Confirme sua senha:</label>
                <input type="password" name="senha" id="senha"></input>
            </Form>
        </>
    )
}
import React from 'react';
import {Container, Content, LabelError, LabelSignin, Strong} from "./styles";
import {InputStyles} from "../../components/Input/styles";
import Button from "../../components/Button";
import {Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Signup(props) {
    const [email, setEmail] = React.useState("");
    const [emailConf, setEmailConf] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [error, setError] = React.useState("");

    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSignup = () => {
        if (!email || !emailConf || !senha) {
            setError('Preencha todos os campos');
            return
        } else if (email !== emailConf) {
            setError('Os e-mails não são iguais');
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res)
            return;
        }

        alert("Usuario cadastrado com sucesso!");
        navigate("/")
    }

    return (
        <Container>
            <Content>
                <InputStyles
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <InputStyles
                    type="email"
                    placeholder="Confirme seu e-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                <InputStyles
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <LabelError>{error}</LabelError>
                <Button Text="Inscreva-se" onClick={handleSignup}/>
                <LabelSignin>
                    Já tem uma conta?
                    <Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </Strong>
                </LabelSignin>
            </Content>
        </Container>
    );
}

export default Signup;
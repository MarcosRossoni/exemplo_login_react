import React, {useState} from 'react';
import {Container, Content, Label, LabelError, LabelSignuo, Strong} from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default Signin;

function Signin(props) {

    const { signin } = useAuth()
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            setError('Preencha todos os campos');
            return
        }

        const res = signin(email, password);

        if (res) {
            setError(res)
            return;
        }
        navigate('/home')
    }

    return (
        <Container>
            <Label>SISTEMA DE LOGIN</Label>
            <Content>
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="passwor"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError("")]}
                />
                <LabelError>{error}</LabelError>
                <Button Text="Entrar" onClick={handleLogin}/>
                <LabelSignuo>
                    Não tem uma conta?
                    <Strong>
                        <Link to="/signup">&nbsp;Registre-se</Link>
                    </Strong>
                </LabelSignuo>
            </Content>
        </Container>
);
}

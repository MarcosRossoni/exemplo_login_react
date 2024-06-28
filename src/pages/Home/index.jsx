import React from 'react';
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {Container, Title} from "./styles";
import Button from "../../components/Button";

function Home(props) {
    const { signout } = useAuth()
    const navigate = useNavigate();

    return (
        <Container>
            <Title>Home</Title>
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}></Button>
        </Container>
    );
}

export default Home;
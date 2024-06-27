import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signin from "../pages/Signin";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";

const Private = ({Item}) => {
    const {signed} = useAuth()

    return signed > 0 ? <Item/> : <Signin/>
}

function RoutesApp(props) {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/home" element={<Private Item={Home}/>}/>
                    <Route path="/" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="*" element={<Signin/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;
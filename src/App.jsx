import React from 'react';
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes";
import {AuthProvider} from "./contexts/auth";

function App(props) {
    return (
        <AuthProvider>
            <RoutesApp/>
            <GlobalStyle />
        </AuthProvider>

    );
}

export default App;
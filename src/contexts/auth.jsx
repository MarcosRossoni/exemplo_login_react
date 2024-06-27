import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, [])

    const singnin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const hasUser = JSON.parse(usersStorage)?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].email === password) {
                const token = Math.random().toString(36);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser({email, password})
                return;
            } else {
                return "E-mail ou senha incorretos";
            }
        } else {
            return "Usuario não cadastrado";
        }
    }

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const hasUser = JSON.parse(usersStorage)?.filter((user) => user.email === email);

        if (hasUser?.length) {
            return "Ja existe uma conta com esse email"
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, {email, password}];
        } else {
            newUser = [{email, password}];
        }

        localStorage.setItem("user_token", JSON.stringify(newUser));

        return;
    }

    const signout = () => {
        setUser(null)
        localStorage.removeItem("user_token");
    }

    return (
        <AuthContext.Provider
            value={{user, signed: !!user, singnin, signup, signout}}
        >
            {children}
        </AuthContext.Provider>)
}
import { createContext, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";

import { api } from "../services/api";

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    signIn: ({email, password}: SignInData) => Promise<void>
}

type User = {
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null);

    const toast = useToast();

    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies();

        if (token) {
            api.get(`/users?token=${token}`).then((response) => {
                setUser(response.data[0]);
            });
        }
    }, []);

    async function signIn({email, password}: SignInData) {
        api.get(`/users?email=${email}`).then((response) => {
            if (!response.data) {
              toast({
                title: "Error",
                description: "E-mail não encontrado.",
                status: "error",
                duration: 3000,
                position: "top-right",
              });
              return;
            }
            if (response.data[0].password !== password) {
                toast({
                    title: "Error",
                    description: "Senha inválida.",
                    status: "error",
                    duration: 3000,
                    position: "top-right",
                });
                return;
            }
            setCookie(undefined, "nextauth.token", response.data[0].token, {
                maxAge: 60 * 60 * 1 // 1 hour
            })
            api.defaults.headers.common['Authorization'] = "Bearer " + response.data[0].token;
            setUser(response.data[0]);
            Router.push("/Dashboard");
        });
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn }}>
           {children} 
        </AuthContext.Provider>
    )
}
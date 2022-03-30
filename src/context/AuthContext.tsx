import React, { createContext } from 'react';
import { auth } from '../firebase'
import { User, UserCredential, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

interface IAuthContext {
    currentUser: User | null;
    login: (email: string, password: string) => Promise<UserCredential>;
    signup: (email: string, password: string) => Promise<UserCredential>;
    signout: () => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider: React.FC = ({children}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        })
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        signout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
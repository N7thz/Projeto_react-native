import React, { useState, createContext, Dispatch, SetStateAction } from 'react';


interface User {

}

interface ApplicationContextProps {
    usuario: User;
    setUsuario: Dispatch<SetStateAction<User>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    usuarioLogado: User;
    setUsuarioLogado: Dispatch<SetStateAction<User>>;
}

const defaultUser: User = {};

export const ApplicationContext = createContext<ApplicationContextProps>({
    
    usuario: defaultUser,
    setUsuario: () => { },
    email: '',
    setEmail: () => { },
    password: '',
    setPassword: () => { },
    usuarioLogado: defaultUser,
    setUsuarioLogado: () => { }
})

interface ContextProps {
    children: React.ReactNode;
}

export const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
    
    const [usuario, setUsuario] = useState<User>(defaultUser);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [usuarioLogado, setUsuarioLogado] = useState <User> (defaultUser);

    return (
        <ApplicationContext.Provider value={{ usuarioLogado, setUsuarioLogado, usuario, setUsuario, email, setEmail, password, setPassword }}>
            {children}
        </ApplicationContext.Provider>
    );
};


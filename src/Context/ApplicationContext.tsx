import React, { useState, createContext, useContext, Dispatch, SetStateAction } from 'react';

interface User {

}

interface ApplicationContextProps {
    usuario: User;
    setUsuario: Dispatch<SetStateAction<User>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
}

const defaultUser: User = {};

export const ApplicationContext = createContext<ApplicationContextProps>({
    
    usuario: defaultUser,
    setUsuario: () => { },
    email: '',
    setEmail: () => { },
    password: '',
    setPassword: () => { },
})

interface ContextProps {
    children: React.ReactNode;
}

export const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
    
    const [usuario, setUsuario] = useState<User>(defaultUser);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <ApplicationContext.Provider value={{ usuario, setUsuario, email, setEmail, password, setPassword }}>
            {children}
        </ApplicationContext.Provider>
    );
};

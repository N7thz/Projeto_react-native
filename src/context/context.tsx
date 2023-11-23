import React, { useState, createContext, Dispatch, SetStateAction } from 'react';
import axios from 'axios'

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
    nick: string;
    setNick: Dispatch<SetStateAction<string>>;
    id: string;
    setId: Dispatch<SetStateAction<string>>;
    accountId: string;
    setAccountId: Dispatch<SetStateAction<string>>;
    puuid: string;
    setPuuid: Dispatch<SetStateAction<string>>;
    profileIconId: number;
    setProfileIconId: Dispatch<SetStateAction<number>>;
    revisionDate: number;
    setRevisionDate: Dispatch<SetStateAction<number>>;
    summonerLevel: number;
    setSummonerLevel: Dispatch<SetStateAction<number>>;
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
    setUsuarioLogado: () => { },
    nick: '',
    setNick: () => { },
    id: '',
    setId: () => { },
    accountId: '',
    setAccountId: () => { },
    puuid: '',
    setPuuid: () => { },
    profileIconId: 0,
    setProfileIconId: () => { },
    revisionDate: 0,
    setRevisionDate: () => { },
    summonerLevel: 0,
    setSummonerLevel: () => { }
})

interface ContextProps {
    children: React.ReactNode;
}

export const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
    
    const [usuario, setUsuario] = useState<User>(defaultUser);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [usuarioLogado, setUsuarioLogado] = useState <User> (defaultUser);
    const [nick, setNick] = useState<string>('')
    const [id, setId] = useState<string>('');
    const [accountId, setAccountId] = useState<string>('');
    const [puuid, setPuuid] = useState<string>('');
    const [profileIconId, setProfileIconId] = useState<number>(0)
    const [revisionDate, setRevisionDate] = useState<number>(0)
    const [summonerLevel, setSummonerLevel] = useState<number>(0)
    const [level, setLevel] = useState<string>('')
    const [icon, setIcon] = useState<number>(0)
    
    const getUser = (nickName: string, key: string) => {

        axios
            .get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickName}?api_key=${key}`)
            .then((response) => {

                const responseData = response.data

                setNick(responseData.name)
                setLevel(responseData.summonerLevel)
                setPuuid(responseData.puuid)
                setProfileIconId(responseData.profileIconId)
                setId(responseData.id)
                setAccountId(responseData.accountId)
                setRevisionDate(responseData.revisionDate)
                setSummonerLevel(responseData.summonerLevel)

            })
            .catch((error) => {
                console.error('Erro ao obter usuário:', error.message)
            })
    }

    return (
        <ApplicationContext.Provider value={{ usuarioLogado, setUsuarioLogado, usuario, setUsuario, email, setEmail, password, setPassword, nick, setNick, id, setId, puuid, setPuuid, accountId, setAccountId, profileIconId, setProfileIconId, revisionDate, setRevisionDate, summonerLevel, setSummonerLevel}}>
            {children}
        </ApplicationContext.Provider>
    );
};


import React, { useState, createContext, Dispatch, SetStateAction } from 'react' 

interface User {}

interface ApplicationContextProps {

    key: string
    usuario: User 
    setUsuario: Dispatch<SetStateAction<User>> 
    email: string 
    setEmail: Dispatch<SetStateAction<string>> 
    password: string 
    setPassword: Dispatch<SetStateAction<string>> 
    usuarioLogado: User 
    setUsuarioLogado: Dispatch<SetStateAction<User>> 
    nick: string 
    setNick: Dispatch<SetStateAction<string>> 
    id: string 
    setId: Dispatch<SetStateAction<string>> 
    accountId: string 
    setAccountId: Dispatch<SetStateAction<string>> 
    puuid: string 
    setPuuid: Dispatch<SetStateAction<string>> 
    profileIconId: number 
    setProfileIconId: Dispatch<SetStateAction<number>> 
    revisionDate: number 
    setRevisionDate: Dispatch<SetStateAction<number>> 
    summonerLevel: number 
    setSummonerLevel: Dispatch<SetStateAction<number>> 
}

const defaultUser: User = {} 

export const ApplicationContext = createContext<ApplicationContextProps>({
    
    key: '',
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
    children: React.ReactNode 
}

export const ApplicationProvider: React.FC<ContextProps> = ({ children }) => {
    
    const key: string = 'RGAPI-0071a230-93e2-4ca5-bad2-b3b49862b748'

    const [usuario, setUsuario] = useState<User>(defaultUser) 
    const [email, setEmail] = useState<string>('') 
    const [password, setPassword] = useState<string>('') 
    const [usuarioLogado, setUsuarioLogado] = useState <User> (defaultUser) 
    const [nick, setNick] = useState<string>('')
    const [id, setId] = useState<string>('') 
    const [accountId, setAccountId] = useState<string>('') 
    const [puuid, setPuuid] = useState<string>('') 
    const [profileIconId, setProfileIconId] = useState<number>(0)
    const [revisionDate, setRevisionDate] = useState<number>(0)
    const [summonerLevel, setSummonerLevel] = useState<number>(0)

    return (
        <ApplicationContext.Provider value={{ 
            key,
            usuarioLogado, setUsuarioLogado, 
            usuario, setUsuario, 
            email, setEmail, 
            password, setPassword, 
            nick, setNick, 
            id, setId, 
            puuid, setPuuid, 
            accountId, setAccountId, 
            profileIconId, setProfileIconId, 
            revisionDate, setRevisionDate, 
            summonerLevel, setSummonerLevel
        }}>
            {children}
        </ApplicationContext.Provider>
    ) 
} 


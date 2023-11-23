import axios from "axios";

const Api = axios.create({

    baseURL: "http://192.168.0.101:8080/"
});

export const getAllUsers = async () => {

    return await Api.get('users')
}

export const getUser = async (email: string, password: string) => {

    return await Api.get('users', { params: { email, password } })
}

export const postUser = (email: string, password: string, dados: {}) => {

    const user = {

        email, password, dados
    }

    return Api.post('users', user)
}

export const getUserData = (nickName: string, key: string,) => {

    axios
        .get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickName}?api_key=${key}`)
        .then((response) => {

            return response
        })
        .catch((error) => {
            console.error('Erro ao obter usuário:', error.message)
        })
}

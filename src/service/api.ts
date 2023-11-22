import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8080/"
});

export const getAllUsers = async () => {

    return await Api.get('users')
}

export const getUser = async (email: string, password: string) => {

    return await Api.get('users', { params: { email, password } })
}

export const postUser = (email: string, password: string) => {

    return Api.post('users', { email, password })
}

export const getUserData = (nickName: string, key: string,) => {

    axios
        .get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickName}?api_key=${key}`)
        .then((response) => {

            console.log(response);

            return response
        })
        .catch((error) => {
            console.error('Erro ao obter usuário:', error.message)
        })
}

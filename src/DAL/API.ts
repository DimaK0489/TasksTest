import axios from 'axios'

export type ResponseType = {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: UsersDataType[]
}
export type UsersDataType = {
    id: number | string
    email: string
    first_name: string
    last_name: string
    avatar?: string
}

const instance = axios.create({
    baseURL: 'https://reqres.in/api/'
})

export const API = {
    getUsers() {
        return instance.get<ResponseType>('users?per_page=10')
    }
}

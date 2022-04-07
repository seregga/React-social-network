import * as  axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "40eb0e15-8161-4d55-b4ac-f64cbceecd04"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(r => r.data)
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
    },
    postFollow(id) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)

    }
}


export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

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
        // console.warn('Please change userAPI on profileAPI');
        return instance.post(`follow/${id}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)

    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)

        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logout() {
        return instance.delete('auth/login')
    }
}
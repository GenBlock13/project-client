import $api from "../api"

export class AuthService {
    static async registration(name, email, password) {
        return $api.post('/auth/registration', {
            name,
            email,
            password
        })
    }


    static async login(email, password) {
        return $api.post('/auth/login', {
            email,
            password
        })
    }

    static async logout() {
        return $api.post('/auth/logout')
    }
}
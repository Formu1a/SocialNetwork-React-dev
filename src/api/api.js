import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "6cc60ee9-2297-42fe-a7fc-ee37c082ac6b",
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    auth() {
        return instance.get(`auth/me`, {
            withCredentials: true,
        });
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha,
        });
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile);
    },
};

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=$`).then((response) => {
        return response.data;
    });
};
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    },
};

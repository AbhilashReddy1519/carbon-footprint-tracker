import { loginUserApi } from "../user-api";

export const userLogin = async ({ email, password }) => {
    try {
        const response = await loginUserApi({ email, password });
        const { token } = response.data;
        if (!token) {
            throw new Error("Login failed: No token received");
        }
        localStorage.setItem("token", token);
        return true;
    } catch (error) {
        console.error("Login error:", error);
        return false;
    }
};

export const userToken = () => {
    return localStorage.getItem("token");
};

export const userLogout = () => {
    localStorage.removeItem("token");
};

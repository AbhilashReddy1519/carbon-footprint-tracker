// import { verifyToken } from "../../../../Backend/src/jwt";
import { signUpUserApi } from "../user-api";

export const userSignUp = async ({ name, email, password }) => {
    try {
        const response = await signUpUserApi({ name, email, password });
        const { token } = response.data;
        if(!token) {
            throw new Error("Login Failed: no Token available");
        }
        console.log(token, "Login Success");
        
        return true;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

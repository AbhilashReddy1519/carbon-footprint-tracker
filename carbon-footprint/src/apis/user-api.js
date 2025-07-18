import { TaskAppBackend } from "./BackendAPI";

export const loginUserApi = ({ email, password }) =>
    TaskAppBackend.post("/user/login", { email, password });

export const signUpUserApi = ({ name, email, password }) =>
    TaskAppBackend.post("/user/signup", { name, email, password });

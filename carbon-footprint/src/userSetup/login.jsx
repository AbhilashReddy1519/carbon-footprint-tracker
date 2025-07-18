import { useContext, useState } from "react";
import "./user.css";
import { useNavigate } from "react-router-dom";
import Context from "../context/context";

const Login = () => {
    const {changeLanding} = useContext(Context);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your login logic here
        console.log("Logging in with:", { email, password });
    };

    return (
        <main className="login-page">
            <div className="login-container">
                <h1 className="center login-title">Welcome Back</h1>
                <p className="center login-subtitle">
                    Log in to continue your journey 🌍
                </p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>

                    <p className="center small-text">
                        Don't have an account?{" "}
                        <button
                            type="button"
                            onClick={() => {changeLanding('signup');navigate('/signup')}}
                            style={{
                                background: "none",
                                border: "none",
                                color: "blue",
                                textDecoration: "underline",
                                cursor: "pointer",
                            }}>
                            Sign up
                        </button>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Login;

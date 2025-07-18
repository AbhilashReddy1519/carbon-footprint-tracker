import React, { useContext, useState } from "react";
import "./user.css";
import Context from "../context/context";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const {changeLanding} = useContext(Context);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // TODO: Call API here
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2 className="signup-title">Sign Up</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div>
                        <label className="signup-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="signup-input"
                        />
                    </div>
                    <div>
                        <label className="signup-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="signup-input"
                        />
                    </div>
                    <div>
                        <label className="signup-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="signup-input"
                        />
                    </div>
                    <button type="submit" className="signup-button">
                        Create Account
                    </button>
                </form>
                <div className="signup-footer">
                    Already have an account?{" "}
                    <button
                        onClick={() => {changeLanding('login');navigate('/login')}}
                        className="signup-footer-button">
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;

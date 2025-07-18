import { useContext, useState } from "react";
import "./user.css";
import { useNavigate } from "react-router-dom";
import { isEmail } from "validator";
import { userSignUp } from "../apis/utils/userSignup";
import Context from "../context/context";

const SignupPage = () => {
    const {changeLanding} = useContext(Context);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        // Clear error when user starts typing again
        if (error) {
            setError(null);
        }
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setError(null); // Reset error state on new submission

            // --- Basic Validation ---
            if (!isEmail(formData.email)) {
                setError("Please enter a valid email address.");
                return;
            }
            if (formData.password.length < 6) {
                setError("Password must be at least 6 characters long.");
                return;
            }

            setIsLoading(true);
            console.log("Form submitted:", {...formData});
            await userSignUp({...formData});
            // On success, navigate to the login page for the user to log in.
            changeLanding("login");
            navigate("/login");
        } catch (err) {
            // Display a user-friendly error message from the API response
            setError(
                err.response?.data?.message ||
                    "Registration failed. Please try again."
            );
            console.error(err);
        } finally {
            setIsLoading(false);
        }
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
                    {/* Display validation or API errors here */}
                    {error && <p className="signup-error">{error}</p>}
                    <button
                        type="submit"
                        className="signup-button"
                        disabled={isLoading}>
                        {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>
                <div className="signup-footer">
                    Already have an account?{" "}
                    {/* Use Link for semantic navigation instead of a button with an onClick handler */}
                    <button className="signup-footer-button"
                    onClick={() => {navigate("/login");changeLanding("login")}}>
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;

/* 
   Consider adding this style to your user.css for the error message:
   .signup-error {
       color: #e74c3c;
       margin-bottom: 15px;
       text-align: center;
   }
*/

import "./components.css";
import icon from "../images/icon.png";
import { useContext } from "react";
import Context from "../context/context";
import { useNavigate } from "react-router-dom";

function Header() {
    const { changeLanding } = useContext(Context);
    const navigate = useNavigate();

    return (
        <header>
            <div
                className="logoContent"
                onClick={() => {
                    changeLanding("home");
                    navigate("/");
                }}>
                <h2 className="text poiret-one-regular">MAPS</h2>
                <img className="imgLogo" src={icon} alt="This is icon" />
                <h2 className="logo poiret-one-regular">
                    <span style={{ color: "green" }}>Carbon FootPrint</span>{" "}
                    Tracker
                </h2>
            </div>
            <nav>
                <ul
                    style={{
                        listStyle: "none",
                        display: "flex",
                        // flexDirection: "row",
                        justifyContent: "space-evenly",
                    }}>
                    <li
                        onClick={() => {
                            changeLanding("home");
                            navigate("/");
                        }}>
                        Home
                    </li>
                    <li
                        onClick={() => {
                            changeLanding("what");
                            navigate("/what");
                        }}>
                        What is CF?
                    </li>
                </ul>
            </nav>
            <div className="btns">
                <button
                    className="btn-primary"
                    onClick={() => {
                        changeLanding("signup");
                        navigate("/signup");
                    }}>
                    Sign Up
                </button>
                <button
                    className="btn-secondary"
                    onClick={() => {
                        changeLanding("login");
                        navigate("/login");
                    }}>
                    Login
                </button>
            </div>
        </header>
    );
}

export default Header;

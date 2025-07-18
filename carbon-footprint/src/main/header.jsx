import { useContext } from "react";
import icon from "../images/icon.png";
import Context from "../context/context";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const {changeMain, changeLanding} = useContext(Context);
    const navigate = useNavigate();

    return (
        <>
            <header>
                <div
                    className="logoContent"
                    onClick={() => {
                        changeMain("home");
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
                                changeMain("home");
                            }}>
                            Home
                        </li>
                        <li
                            onClick={() => {
                                changeMain("reduce");
                            }}>
                            Reduce
                        </li>
                    </ul>
                </nav>
                <div className="btns">
                    <button
                        className="btn-primary"
                        onClick={() => {
                            changeLanding("home");
                            navigate("/");
                        }}>
                        Log Out
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;

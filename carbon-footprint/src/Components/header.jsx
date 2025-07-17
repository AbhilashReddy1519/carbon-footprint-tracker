import "./components.css";
import icon from "../images/icon.png";

function Header() {
    return (
        <header>
            <div className="logoContent">
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
                    <li>Home</li>
                    <li>What is CF?</li>
                </ul>
            </nav>
            <div className="btns">
                <button className="btn-primary">Sign Up</button>
                <button className="btn-secondary">Login</button>
            </div>
        </header>
    );
}

export default Header;

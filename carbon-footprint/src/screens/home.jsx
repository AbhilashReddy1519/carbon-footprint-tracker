import measure from "../images/measure.png";
import reduce from "../images/reduce.png";
import offset from "../images/offset.png";
import foot from "../images/foot.png";
import hand from "../images/hand.png";
import climate from "../images/climate.png";
import forest from "../images/forest.png";
import communities from "../images/communities.png";
import { useState } from "react";
import How from "../utils/how";
import About from "../utils/about";
import story from "../images/story.png";

function Home() {
    const [component, setComponent] = useState("how");

    const renderComponent = () => {
        switch (component) {
            case "how":
                return <How />;
            case "about":
                return <About />;
            default:
                return null;
        }
    };

    return (
        <>
            <main>
                <div className="div1">
                    <h1 className="limelight-regular">
                        Carbon Footprint Calculator
                    </h1>
                    <p className="center">
                        Carbon emissions from your daily choices, from
                        transportation to diet, can make an impact. We are at
                        <br />a critical climate tipping point — and you can be
                        a part of the solution.
                    </p>
                </div>
                <div className="div2">
                    <div>
                        <h3>
                            Use our interactive calculator to learn your carbon
                            footprint and actions to take to reduce it.
                        </h3>
                        <button>Calculate</button>
                    </div>
                </div>
                <div className="div3">
                    <div>
                        <img src={measure} alt="calculator" />
                        <h2>Measure</h2>
                        <p>
                            Use our carbon footprint calculators for
                            individuals, small businesses, charities and
                            churches
                        </p>
                        <button>Find out more</button>
                    </div>
                    <div>
                        <img src={reduce} alt="Reduce" />
                        <h2>Reduce</h2>
                        <p>
                            Learn more about how to reduce your carbon
                            footprint.
                        </p>
                        <button>Find out more</button>
                    </div>
                    <div>
                        <img src={offset} alt="offset" />
                        <h2>Offset</h2>
                        <p>
                            Compensate for your unavoidable carbon emissions by
                            supporting our community carbon projects.
                        </p>
                        <button>Offset Now</button>
                    </div>
                </div>
                <div className="div4">
                    <div>
                        <h1 className="limelight-regular">HOW IT WORKS</h1>
                        <p>
                            Solving climate change requires reducing carbon
                            emissions. When you offset your footprint, you
                            neutralize your emissions by protecting forests that
                            absorb carbon from the atmosphere.
                        </p>
                    </div>
                    <div class="calc">
                        <div>
                            <img src={foot} alt="foot" />
                            <p>Calculate your carbon footprint</p>
                        </div>
                        <h1>+</h1>
                        <div>
                            <img src={hand} alt="hand" />
                            <p>Offset your climate impact</p>
                        </div>
                        <h1>=</h1>
                        <div>
                            <img src={climate} alt="climate" />
                            <p>
                                Help fight climate change by protecting vital
                                forests
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="limelight-regular">
                            OFFSET YOUR FOOTPRINT.
                            <br /> PROTECT FORESTS.
                        </h1>
                        <p>
                            That is why Conservation International works to
                            promote nature-based solutions to climate change. We
                            need healthy, intact ecosystems — from mangroves to
                            rainforests to grasslands — that absorb and store
                            immense amounts of carbon if we are to prevent
                            climate change from causing irreparable harm
                            humanity. The protection and restoration of these
                            climate-critical ecosystems also directly benefits
                            the local communities who rely on them for food,
                            fresh water and livelihoods.
                        </p>
                    </div>
                </div>
                <div className="div5">
                    <div>
                        <img src={forest} alt="" />
                        <h1 style={{ color: "white" }}>
                            <span style={{ fontSize: "1rem" }}>
                                PROTECT
                                <br />
                            </span>
                            FOREST
                        </h1>
                    </div>
                    <div>
                        <img src={communities} alt="" />
                        <h1 style={{ color: "white" }}>
                            <span style={{ fontSize: "1rem" }}>
                                BENIFIT LOCAL
                                <br />
                            </span>
                            COMMUNITIES
                        </h1>
                    </div>
                </div>
                <div className="div6" style={{ margin: "0 40px" }}>
                    <h1 className="center" style={{ margin: "4rem 10px" }}>
                        MORE ABOUT THIS CALCULATOR
                    </h1>
                    <hr
                        style={{
                            height: "3px",
                            backgroundColor: "rgb(87, 87, 93)",
                            margin: "0",
                        }}
                    />
                    <div style={{ marginTop: "-0.4px" }}>
                        <button
                            className={`poiret-one-regular ${
                                component === "how" ? "borderTop" : ""
                            }`}
                            onClick={() => setComponent("how")}>
                            How it works
                        </button>
                        <button
                            className={`poiret-one-regular ${
                                component === "about" ? "borderTop" : ""
                            }`}
                            onClick={() => setComponent("about")}>
                            About Us
                        </button>
                    </div>
                </div>
                <div className="div7">{renderComponent()}</div>
                <div
                    className="div8"
                    style={{ position: "relative", margin: "20px 0" }}>
                    <img
                        src={story}
                        alt="forest"
                        width={"100%"}
                        height={"600px"}
                    />
                    <div className="story">
                        <h2>A global conservation story </h2>
                        <p>
                            Conservation International works to spotlight and
                            secure the critical benefits that nature provides to
                            humanity. Since our inception, we’ve helped to
                            protect more than 6 million square kilometers (2.3
                            million square miles) of land and sea across more
                            than 70 countries. Currently with offices in 29
                            countries and 2,000 partners worldwide, our reach is
                            truly global.
                        </p>
                        <p>
                            Your contributions support our science, policy work
                            and partnerships as we seek to solve the climate
                            crisis and create a cleaner, healthier planet.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;

const Home = () => {
    return (
        <>
            <div className="can2">
                <h1>
                    Calculate{" "}
                    <span style={{ color: "#E1AD01" }}>Carbon-FootPrint</span>
                </h1>
            </div>
            <div className="can1">
                <iframe
                    title="calculator"
                    width="100%"
                    height="500"
                    frameborder="0"
                    marginwidth="0"
                    marginheight="0"
                    scrolling="no"
                    src="https://calculator.carbonfootprint.com/calculator.aspx"></iframe>
            </div>
            <div className="footerBar"></div>
            <div className="can3">
                <div className="can31">
                    <h1 className="londrina-shadow-regular">
                        HOW BIG IS YOUR ENVIRONMENTAL FOOTPRINT ?
                    </h1>
                    <p className="poiret-one-regular">
                        Our world is in crisis - from climate change to the
                        pollution in our oceans and devastation of our forests.
                        It's up to all of us to fix it. Take your first step
                        with our API based carbon footprint calculator.
                    </p>
                    <button>TAKE THIS QUESTIONNAIRE</button>
                </div>
                <img
                    src="https://footprint.wwf.org.uk/assets/new_footprint_hero-wtRrTZgp.jpg"
                    alt="Animals"
                    width={"100%"}
                />
            </div>
        </>
    );
};

export default Home;

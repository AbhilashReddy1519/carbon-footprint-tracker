import "./screen.css";
import feet from "../images/feet.png";
import world from '../images/world.png';

const What = () => {
    return (
        <>
            <div className="what1">
                <h1>
                    What is{" "}
                    <span style={{ color: "#FFD700" }}>Carbon-FootPrint</span> ?
                </h1>
            </div>
            <div className="what2">
                <img src={feet} alt="" width={"100%"} />
                <div className="what21">
                    <h2>Carbon FootPrint</h2>
                    <p>
                        A carbon footprint (or greenhouse gas footprint) is a
                        calculated value or index that makes it possible to
                        compare the total amount of greenhouse gases that an
                        activity, product, company or country adds to the
                        atmosphere. Carbon footprints are usually reported in
                        tonnes of emissions (CO2-equivalent) per unit of
                        comparison. Such units can be for example tonnes CO2-eq
                        per year, per kilogram of protein for consumption, per
                        kilometer travelled, per piece of clothing and so forth.
                        A product's carbon footprint includes the emissions for
                        the entire life cycle. These run from the production
                        along the supply chain to its final consumption and
                        disposal.
                    </p>
                    <p>
                        The carbon dioxide equivalent (CO2eq) emissions per unit
                        of comparison is a suitable way to express a carbon
                        footprint. This sums up all the greenhouse gas
                        emissions. It includes all greenhouse gases, not just
                        carbon dioxide. And it looks at emissions from economic
                        activities, events, organizations and services.
                    </p>
                </div>
            </div>
            <img src={world} alt="world" width={"100%"}/>
            <div className="extra-info-section">
                <div className="info-card">
                    <img src="https://cdn.shopify.com/s/files/1/0003/4501/4332/files/AE_March2021_4_600x600.jpg?v=1617141086" alt="reduce emissions" className="info-img" />
                    <div className="info-content">
                        <h3>How to Reduce Carbon Emissions</h3>
                        <p>
                            Reducing your carbon footprint involves using energy-efficient appliances,
                            driving less, choosing renewable energy sources, and reducing meat consumption.
                            Every small step contributes to a healthier planet.
                        </p>
                    </div>
                </div>

                <div className="info-card">
                    <img src="https://www.freedomiseverything.com/wp-content/uploads/2020/02/take-action-1.jpg" alt="take action" className="info-img" />
                    <div className="info-content">
                        <h3>Take Action Today</h3>
                        <p>
                            Participate in community cleanups, plant trees, conserve water, and support sustainable
                            brands. Your choices matter. Together, we can make a significant impact in combating climate change.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default What;

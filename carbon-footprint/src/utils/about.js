import "./utils.css";

const About = () => {
    return (
        <div className="about-container">
            <section className="about-section">
                <h2 className="about-heading">Our Mission</h2>
                <p className="about-text">
                    Our mission is to empower individuals and communities to understand and reduce their carbon footprint. We believe that collective small actions can lead to significant environmental impact. This calculator is designed to be a simple, accessible tool for anyone looking to make a positive change for our planet.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-heading">About the Creator</h2>
                <p className="about-text">
                    This project was created by Abhilash Reddy, a passionate student and developer dedicated to using technology for social good. Driven by a concern for climate change, Abhilash built this tracker to make environmental awareness more tangible and actionable for everyone.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-heading">Get in Touch</h2>
                <p className="about-text">
                    Have questions, feedback, or ideas for collaboration? We'd love to hear from you. You can reach out via email at: <a href="mailto:mapsabhilash@gmail.com">mapsabhilash@gmail.com</a>
                </p>
            </section>
        </div>
    );
};

export default About;

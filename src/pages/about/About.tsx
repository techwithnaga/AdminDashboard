import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="section">
          <h3>Admin Dashboard by Masnaga</h3>
          <p className="content">
            A simple dashboard that displays various charts, data analysis and
            data tables.
          </p>
        </div>
        <br />
        <div className="section">
          <h3>Built With</h3>

          <div className="content" style={{ marginLeft: "15px" }}>
            <div className="leftList">
              <ul>
                <li>React</li>
                <li>Typescript</li>
                <li>Recharts</li>
                <li>React Hook Form</li>
              </ul>
            </div>

            <div className="rightList">
              <ul>
                <li>MUI</li>
                <li>Zustand</li>
                <li>SASS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
          </div>
        </div>
        <br />

        <div className="section">
          <h3>ERD (Entity Relationship Diagram)</h3>
          <img
            style={{ width: "650px" }}
            className="content"
            src="UMLdiagram.jpg"
            alt="uml diagram"
          />
        </div>
        <br />
      </div>
    </div>
  );
};

export default About;

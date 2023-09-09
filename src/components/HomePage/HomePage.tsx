// import NavBar from "../NavBar";
import frontnowLogo from "./frontnowLogo.svg";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="App">
        <section className="Section-nav">
          <div className="App-header">
            <img src={frontnowLogo} className="App-logo" alt="logo" />
            <button className="Resources-btn">Resources</button>
            <button className="Demo-btn">Book a Demo</button>
          </div>
        </section>
        <section className="Section-hero">
          <div className="App-body">
            <div className="Engage-div">Engage. Inspire. Convert</div>
            <div className="Enterprise-div">
              <h1>Enterprise-Grade AI Supercharging</h1>
              <h1>Customer Experience</h1>
            </div>
            <p className="listGroup-details">
              The most powerful SaaS solutions to revolutionize pre-sales in
              e-commerce. Designed to maximize conversion rates, increase
              average order value, and boost customer engagement
            </p>
            <button className="StartNow-btn">Start Now &#10140;</button>
            <div className="Green-line"></div>
            <div className="multipleLogo">This is the multiple logo div</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;

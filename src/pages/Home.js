import About from "./About";
import Contact from "./Contact";
import "./Home.css";
import Job from "./Job";
function Home() {
  return (
    <div id="home" className="home-container">
      <div className="image">
        <img src="/welcome.jpg" alt="Welcome" />
      </div>
      <div className="welcome-text">
        <h1>
          WELCOME TO <br /> Sentab International
        </h1>
        <h2>Your Visionary Consulting Agency</h2>
        <br />
        <br />
        <p>
          Sentab is a full-service Recruitment Agency with a unique approach.
          Since 2016 we’ve been helping our <br />
          candidates living in the Eastern Europe - Ukraine, Russia, Uzbekistan,
          Kyrgyzstan, South Africa and <br /> UAE(multinationals) to find a job
          best suited for their skills and interests, and helping Middle Eastern
          <br /> hospitality companies locate perfect employees. There really is
          no need to go through the hiring process on your <br /> own. Contact
          us today to land your dream job in no time.
        </p>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="Job">
        <Job />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
export default Home;

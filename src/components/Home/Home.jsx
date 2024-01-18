import { Link } from "react-router-dom";
import "./style.css";

import project1 from "../../assets/recent-project-01.png";
import project2 from "../../assets/recent-project-02.png";

import profilePic from "../../assets/profile-photo.webp";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="home-text">
            <h1>
              Front end developer <br /> and{" "}
              <span className="text-primary">designer</span>
            </h1>

            <p>
              I love to create beautiful and functional websites. I spend
              learning new things in my free times.
            </p>

            <Link to="/works" className="btn-primary">
              See works
            </Link>
          </div>
          <img src={profilePic} alt="Ali Sajad profile" />
        </div>
      </section>

      <section id="recent-works">
        <div className="container">
          <h2>
            Recent <span className="text-primary">Works</span>
          </h2>

          <div className="recent-works-container">
            <div className="recent-work">
              <img src={project1} alt="Work>" />
              <div className="recent-work-info">
                <h3>Palindrome Checker</h3>
                <p>This website checks if a word is palindrome or not.</p>
                <a
                  href="https://alisajad001.github.io/palindrome-checker/"
                  className="text-primary"
                  target="_blank"
                >
                  Visit demo
                </a>
              </div>
            </div>
            <div className="recent-work">
              <img src={project2} alt="Work>" />
              <div className="recent-work-info">
                <h3>React Quiz App</h3>
                <p>A simple React quiz app which uses react useState hook.</p>
                <a
                  href="https://quiz-app0093.netlify.app/"
                  className="text-primary"
                  target="_blank"
                >
                  Visit demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

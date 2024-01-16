import { Link } from "react-router-dom";
import "./style.css";

import profilePic from "../../assets/profile-photo.webp";

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="home-text">
          <h1>
            Front end developer <br /> and{" "}
            <span className="text-primary">designer</span>
          </h1>

          <p>
            I love to create beautiful and functional websites. I spend learning
            new things in my free times.
          </p>

          <Link to="/works" className="btn-primary">
            See works
          </Link>
        </div>
        <img src={profilePic} alt="" />
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import "../styles/about-us.css";
import zc from "../assets/founder.jpg";

function AboutUs() {
  return (
    <div className="main">
      <div className="about-us-title">
        <h1>About us</h1>
      </div>
      <div className="blurb">
        <p>
          Welcome to Perfect Prints 3D Printing, where we strive to make 3D
          printing accessible and hassle-free for everyone. Our founder, Zachary
          Cushon, is a recent graduate from Central Washington University who
          started this business in response to the challenging job market. At
          our company, we offer 3D printing services, as well as custom part
          design, to make your ideas a reality. Our target audience is plant
          enthusiasts who are looking for unique and innovative ways to display
          their plants. We offer a wide range of 3D printed pots and planters
          that will make your plants stand out from the rest. What sets us apart
          from our competitors is our passion for 3D printing and our commitment
          to making this technology accessible to everyone. Our goal is to
          create a comprehensive and headache-free 3D print purchasing
          experience. We want to make sure that our customers have a seamless
          experience from start to finish, and that they are fully satisfied
          with the end result. We pride ourselves on our excellent customer
          service, and we will work with you every step of the way to make sure
          that your 3D printing needs are met. Thank you for choosing Perfect
          Prints 3D Printing!
        </p>
      </div>
      <img src={zc} className="founder-pic"></img>
    </div>
  );
}

export default AboutUs;

import React from "react";
import Navbar from "../../components/navbar";
import Scrolltop from "../../components/ScrollTop/Scrolltop";
import "./About.css";

const teamMembers = [
  {
    name: "Navkirat Singh",
    role: "Founder & Women’s Rights Advocate",
    image: "./founder1.jpg",
  },
  {
    name: "Hardik Kapur",
    role: "Lead Developer",
    image: "./founder2.jpg",
  },
  {
    name: "Rupashi Kaura",
    role: "Vocalist",
    image: "./founder3.jpg",
  },
  {
    name: "Arnav",
    role: "Student",
    image: "./founder4.jpg",
  },
];

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="about__container">
        <div className="about__div">
          <h1>Who We Are</h1>
          <p>
            We are a team of changemakers, developers, psychologists, legal
            advisors, and outreach specialists united by a shared vision—making
            women's safety an everyday right, not a privilege. We blend
            technology, policy, and community action to build real-world impact.
          </p>
        </div>
        <div className="about__div">
          <h1>Our Mission</h1>
          <p>
            We are a dedicated team working toward a future where women’s safety
            is a universal norm. Our efforts focus on awareness, advocacy,
            education, and building real-world safety solutions.
          </p>
        </div>

        <div className="about__div">
          <h1>What We Do</h1>
          <p>
            From creating digital safety tools to running legal awareness drives
            and community programs, we take a holistic approach to solving the
            complex challenge of women’s safety.
          </p>
        </div>

        <div className="about__div">
          <h1>Is It Accessible?</h1>
          <p>
            Always. All our services, knowledge resources, and digital tools are
            free and open to the public. Empowerment shouldn't cost a rupee.
          </p>
        </div>

        <br />
        <br />
        <h1 className="about__heading">Our Team</h1>
        <div className="contributors__list">
          {teamMembers.map((member, index) => (
            <div className="contributor" key={index}>
              <div className="contributor__img">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="contributor__details">
                <h1>{member.name}</h1>
                <p>
                  <strong>{member.role}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>

        <Scrolltop showBelow={250} />
      </section>
    </div>
  );
};

export default About;

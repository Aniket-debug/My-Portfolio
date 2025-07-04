
import "./about.css";
import Mypic from "../../assets/avatar-2.svg";
import Aboutbox from './Aboutbox';

export default function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Mypic} alt="" width="190" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Aniket Agarwal. I am learning MERN Stack Development (MongoDB, Express.js, React.js, Node.js) along with that I am Strong at Data Structure & Algorithms, and Competitive Programming.<br /><br />
              I have secured many 2 digits All India Ranks in various Coding Contests. </p>
            <a href="" className="btn">Download CV</a>
          </div>

          {/* SKILLS */}
          <div className="about__skills grid">

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">DSA/CP</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage dsa"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">C++</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage cpp"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills__number ">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage redux"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Java</h3>
                <span className="skills__number ">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage nodejs"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React.js</h3>
                <span className="skills__number ">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage reactjs"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node.js</h3>
                <span className="skills__number ">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage nodejs"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Aboutbox />
    </section>
  )
}

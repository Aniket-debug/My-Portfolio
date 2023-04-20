import React from 'react'
import "./experience.css"
import twowaits from "../../assets/twowaits_logo.png";
import byte from "../../assets/byte_logo.png";
import opensource from "../../assets/opensource_logo.png";

export default function Experience() {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>
      
      <div className="experience__container grid">

        <div className="experience__item">
          <img src={byte} alt="" width="80" className="experience__img"></img>
          <h3 className="experience__title">Tech Lead</h3>
          <h4 className="subtitle">BYTE | Coding Club</h4>
          <ul>
            <li className="experience__description">• Manages workloads to ensure even distribution of responsibilities.</li>
            <li className="experience__description">• Solve doubts related to different topics such as Dynamic Programming, recursion, etc.</li>
            <li className="experience__description">• Helped individuals to get started with Web Development and DSA</li>
          </ul>
        </div>

        <div className="experience__item">
          {/* <img src={opensource} alt="" width="80" className="experience__img"></img> */}
          <h3 className="experience__title">SDE (Software Development Engineer) Intern</h3>
          <h4 className="subtitle">DesiQnA</h4>
          <ul>
            <li className="experience__description">• Worked on the Complete Designing and Development of the Fully Responsive website.</li>
            <li className="experience__description">• Uploading Jobs and Interview Experience Section on the Website.</li>
            <li className="experience__description">• Optimised the Code to increase the User Experience and User
        Interface by 60%.</li>
          </ul>
        </div>

        <div className="experience__item">
          <img src={twowaits} alt="" width="80" className="experience__img"></img>
          <h3 className="experience__title">Subject Matter Expert</h3>
          <h4 className="subtitle">DesiQnA</h4>
          <ul>
            <li className="experience__description">• Reviewed technical content, codes, and articles.</li>
            <li className="experience__description">• Teach Beginner to advance extensive DSA.</li>
            <li className="experience__description">• Solved Doubts of students on Data structures on different platforms like Leetcode, GFG etc.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

import React from "react";
import "./App.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="wrapper dark-theme">
      <nav className="navbar">
        <h1 className="logo">Swati Swapna</h1>
        <ul className="nav-links">
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#activities">Activities</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Hi, I'm Swati Swapna</h1>
        <p>AI/ML Enthusiast | iOS & Web Developer</p>
      </header>

      <section id="education" className="content">
        <h2>Education</h2>
        <p><strong>SRM Institute of Science and Technology</strong></p>
        <p>B.Tech in CSE w/s AIML | CGPA: 9.28 | Graduation: June 2026</p>
      </section>

      <section id="experience" className="content">
        <h2>Experience</h2>
        <p><strong>TATA STEEL, Jamshedpur</strong> (May 2024 – July 2024)</p>
        <p>Developed an employee information system using React.js & MongoDB, improving data reliability by 40%.</p>
        <p><strong>ACE SERVICES, Remote</strong> (Dec 2023)</p>
        <p>Enhanced frontend performance, leading to a 15% improvement in site responsiveness.</p>
      </section>

      <section id="projects" className="content">
        <h2>Projects</h2>
        <p><strong>Dark Pattern Recognition</strong> - Browser extension detecting deceptive UI with 91% accuracy.</p>
        <p><strong>DeskBreak</strong> - iOS app promoting corporate wellness using UIKit, Vision, and Firebase.</p>
        <p><strong>College Management System</strong> - Web application improving admin efficiency by 40%.</p>
      </section>

      <section id="skills" className="content">
        <h2>Skills</h2>
        <p>Python, C, C++, SQL, Swift, React, TypeScript</p>
        <p>Machine Learning: TensorFlow, PyTorch, OpenCV</p>
        <p>Web Development: MERN Stack (MongoDB, Express, React, Node.js)</p>
      </section>

      <section id="activities" className="content">
        <h2>Activities</h2>
        <p><strong>AARUUSH, SRMIST</strong> (Committee Head)</p>
        <p>Emceed events, trained a team of 20, and boosted social media engagement by 30%.</p>
        <p><strong>NextGenAI</strong> (Team Lead)</p>
        <p>Led Sensor Fault Detection project with 94% accuracy, reducing error rates by 45%.</p>
      </section>

      <footer className="footer">
        <div className="icons">
          <a href="mailto:swatiswapnas.s@gmail.com"><FaEnvelope /></a>
          <a href="https://linkedin.com/in/swati-swapna" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/swatiswapna" target="_blank"><FaGithub /></a>
        </div>
        <p>&copy; 2025 Swati Swapna. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
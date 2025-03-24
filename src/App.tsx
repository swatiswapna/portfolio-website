import React, { useEffect, useState } from "react";
import "./App.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import profileImg from "./assets/profile.jpeg";
import projectImg1 from "./assets/dark_pattern.jpeg";
import projectImg2 from "./assets/deskbreak.png";
import projectImg3 from "./assets/college.png";

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="nav-content">
          <h1 className="logo">SS</h1>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#activities">Activities</a></li>
          </ul>
          <div className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <div className="profile-image-container">
            <img src={profileImg} alt="Swati Swapna" className="profile-image" />
          </div>
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Swati Swapna</span></h1>
            <p className="tagline">AI/ML Enthusiast | iOS & Web Developer</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">View Projects</a>
              <a href="#contact" className="btn secondary-btn">Contact Me</a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll to explore</p>
        </div>
      </header>
      
      <section id="about" className="section about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm an AI/ML enthusiast and full-stack developer with experience in iOS and web development.
            Currently pursuing B.Tech in Computer Science with specialization in AI/ML at SRM Institute of Science and Technology.
            I'm passionate about creating innovative solutions using cutting-edge technologies.
          </p>
        </div>
      </section>

      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>SRM Institute of Science and Technology</h3>
              <p className="timeline-date">2022 - 2026</p>
              <p>B.Tech in CSE with specialization in AIML</p>
              <p>CGPA: 9.28</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>TATA STEEL, Jamshedpur</h3>
              <p className="timeline-date">May 2024 – July 2024</p>
              <p>Developed an employee information system using React.js & MongoDB, improving data reliability by 40%.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>ACE SERVICES, Remote</h3>
              <p className="timeline-date">Dec 2023</p>
              <p>Enhanced frontend performance, leading to a 15% improvement in site responsiveness.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          <div className="project">
            <div className="project-image">
              <img src={projectImg1} alt="Dark Pattern Recognition" />
              <div className="project-overlay">
                <a href="https://github.com/swatiswapna/Dark-Pattern-Detection.git" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              </div>
            </div>
            <div className="project-info">
              <h3>Dark Pattern Recognition</h3>
              <p>Browser extension detecting deceptive UI with 91% accuracy using machine learning algorithms.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>TensorFlow</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src={projectImg2} alt="DeskBreak" />
              <div className="project-overlay">
                <a href="https://github.com/swatiswapna/Desk-Break.git" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              </div>
            </div>
            <div className="project-info">
              <h3>DeskBreak</h3>
              <p>iOS app promoting corporate wellness using UIKit, Vision, and Firebase.</p>
              <div className="project-tech">
                <span>Swift</span>
                <span>UIKit</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src={projectImg3} alt="College Management System" />
              <div className="project-overlay">
                <a href="https://github.com/swatiswapna/College_Management_System.git" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              </div>
            </div>
            <div className="project-info">
              <h3>College Management System</h3>
              <p>Web application improving admin efficiency by 40% using MERN stack.</p>
              <div className="project-tech">
                <span>React</span>
                <span>MongoDB</span>
                <span>Express</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
  <h2 className="section-title">Skills</h2>
  <div className="skills-bubbles-container">
    <div className="skills-category">
      <h3>Languages</h3>
      <div className="bubble-container">
        <div className="skill-bubble">Python</div>
        <div className="skill-bubble">C++</div>
        <div className="skill-bubble">Swift</div>
        <div className="skill-bubble">JavaScript</div>
        <div className="skill-bubble">TypeScript</div>
        <div className="skill-bubble">SQL</div>
      </div>
    </div>
    
    <div className="skills-category">
      <h3>Machine Learning</h3>
      <div className="bubble-container">
        <div className="skill-bubble">TensorFlow</div>
        <div className="skill-bubble">PyTorch</div>
        <div className="skill-bubble">OpenCV</div>
      </div>
    </div>
    
    <div className="skills-category">
      <h3>Web Development</h3>
      <div className="bubble-container">
        <div className="skill-bubble">React</div>
        <div className="skill-bubble">Node.js</div>
        <div className="skill-bubble">MongoDB</div>
        <div className="skill-bubble">Express</div>
      </div>
    </div>
  </div>
</section>

      <section id="activities" className="section">
        <h2 className="section-title">Activities</h2>
        <div className="activities-container">
          <div className="activity">
            <h3>AARUUSH, SRMIST <span className="activity-role">Committee Head</span></h3>
            <p>Emceed events, trained a team of 20, and boosted social media engagement by 30%.</p>
          </div>
          <div className="activity">
            <h3>NextGenAI <span className="activity-role">Team Lead</span></h3>
            <p>Led Sensor Fault Detection project with 94% accuracy, reducing error rates by 45%.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
          <div className="contact-links">
            <a href="mailto:swatiswapnas.s@gmail.com" className="contact-link">
              <FaEnvelope />
              <span>swatiswapnas.s@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/swati-swapna" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin />
              <span>linkedin.com/in/swati-swapna</span>
            </a>
            <a href="https://github.com/swatiswapna" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaGithub />
              <span>github.com/swatiswapna</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">SS</div>
          <p>&copy; 2025 Swati Swapna. All rights reserved.</p>
          <div className="social-icons">
            <a href="mailto:swatiswapnas.s@gmail.com"><FaEnvelope /></a>
            <a href="https://linkedin.com/in/swati-swapna" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/swatiswapna" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </footer>

      <button 
        className={`scroll-top-btn ${isScrolled ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Portfolio;
import { useState } from 'react'
import "../../constants/styles/Home.css"

import {
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

import Resume from "../../constants/resume/JohnOnuohaResume.pdf"
import ProfileImage from "../../constants/assest/me.jpeg"

export const About = () => {

  const [options, setOptions] = useState("whoiam")

  return (
    <div className='container-bottom'>

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-layout">

          {/* Left: photo */}
          <div className="profile-image-container">
            <img
              src={ProfileImage}
              alt="Ikenna Onuoha"
              className="profile-image"
            />
          </div>

          {/* Right: text + socials */}
          <div className="hero-text">
            <p className="subtext">Portfolio | Software & AI Engineer.</p>
            <h1>Ikenna Onuoha</h1>
            <h3 className="subtext-para">Building to help.</h3>

            <div className="socials">
              <div className="resume-actions">
                <a href={Resume} target="_blank" rel="noopener noreferrer" className="social-link">
                  <button className="social-btn">
                    <FaFileAlt className="icon" />
                    View Resume
                  </button>
                </a>
                <a href={Resume} download className="social-link">
                  <button className="social-btn">
                    <FaDownload className="icon" />
                    Download Resume
                  </button>
                </a>
              </div>

              <div className="social-icons">
                <a href="https://github.com/jonuoha60" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/john-onuoha1/" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaLinkedin />
                </a>
                <a href="mailto:your@email.com" className="icon-link">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── About Tabs ── */}
      <section className='about-me'>

        <div className='about-tabs'>
          <button onClick={() => setOptions("whoiam")} className={`about-btn ${options === "whoiam" ? "active" : ""}`}>
            Who I Am
          </button>
          <button onClick={() => setOptions("education")} className={`about-btn ${options === "education" ? "active" : ""}`}>
            Education
          </button>
          <button onClick={() => setOptions("passion")} className={`about-btn ${options === "passion" ? "active" : ""}`}>
            Passion
          </button>
        </div>

        <div key={options} className='tab-content'>

          {options === "whoiam" && (
            <>
              <h2>About Me</h2>
              <p>
                I am a software engineer with a passion for building innovative and
                efficient solutions. With a strong background in computer science and
                experience in various programming languages.
              </p>
            </>
          )}
{options === "education" && (
  <div className='education-container'>
    <div className='education-card'>
      <div className='education-header'>
        <div className='education-title'>
          <img
            src="https://www.yorku.ca/favicon.ico"
            alt="York University"
            className='school-icon'
          />
          <h3>York University</h3>
        </div>
        <p className='education-year'>2028</p>
      </div>
      <ul className="education-list">
        <li className='education-item'>Bachelor of Engineering, Software Engineering</li>
      </ul>
    </div>

    <div className='education-card'>
      <div className='education-header'>
        <div className='education-title'>
         <img
  src="https://www.google.com/s2/favicons?domain=humber.ca&sz=64"
  alt="Humber College"
  className='school-icon'
/>
          <h3>Humber College — 4/5.0</h3>
        </div>
        <p className='education-year'>2023 - 2025</p>
      </div>
      <ul className='education-list'>
        <li className='education-item'>Advanced Diploma in Computer Programming and Analysis</li>
        <li className='education-item'><span>Dean's Honour List</span></li>
      </ul>
    </div>

   
  </div>
)}

          {options === "passion" && (
            <div className='passion-container'>
              <h2>My Passion</h2>
              <p>
                I am passionate about creating and using technology that makes a positive impact
                on people's lives and well-being.
              </p>
            </div>
          )}

        </div>
      </section>

    </div>
  )
}
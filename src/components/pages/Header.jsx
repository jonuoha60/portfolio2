import "../../constants/styles/Header.css"

import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope
} from "react-icons/fa";

export const Header = ({ setCurrentPage, currentPage }) => {
  return (
    <section className='header'>
      <div className='header-container'>

        <div className='logo'>
        </div>

        <nav className='nav-links'>
{/* 
          <a href='#home' className='nav-item active'>
  <FaHome className='nav-icon' />
  <span>Home</span>
</a> */}

          <a href='#about' className={`nav-item ${currentPage === "about" ? "active" : ""}`} onClick={() => setCurrentPage("about")}>
            <FaUser className='nav-icon' />
            {/* <span>About</span> */}
          </a>

           <a href='#skills' className={`nav-item ${currentPage === "skills" ? "active" : ""}`} onClick={() => setCurrentPage("skills")}>
            <FaCode className='nav-icon' />
            {/* <span>Skills</span> */}
          </a>

          <a href='#projects' className={`nav-item ${currentPage === "projects" ? "active" : ""}`} onClick={() => setCurrentPage("projects")}>
            <FaBriefcase className='nav-icon' />
            {/* <span>Projects</span> */}
          </a>

          <a href='#contact' className={`nav-item ${currentPage === "contact" ? "active" : ""}`} onClick={() => setCurrentPage("contact")}>
            <FaEnvelope className='nav-icon' />
            {/* <span>Contact</span> */}
          </a>

        </nav>

      </div>
    </section>
  )
}
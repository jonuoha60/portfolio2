import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../../constants/styles/Contact.css";

export const Contact = () => {
  return (
    <div className="container">
      <section className="top-container">
        <h1>Contact Me</h1>
        
      </section>

      <section className="contact-container">
        <div className="contact-card">
          <h2>Get In Touch</h2>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea
              placeholder="Your Message"
              rows="6"
            ></textarea>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>

          <div className="social-links">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-contact"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-contact"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
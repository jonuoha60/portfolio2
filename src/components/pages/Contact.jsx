import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../../constants/styles/Contact.css";

export const Contact = () => {
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = {
      name: inputField.name,
      email: inputField.email,
      message: inputField.message,
    };

    try {
      setFormStatus("Sending...");

      await emailjs.send(
        "service_4f6jidc",
        "template_tfk89lm",
        params,
        "vgzuWP6d1Nv6wdawi"
      );

      console.log("Form submitted:", inputField);

      setFormSuccess(
        "Thank you for the message! I'll get back to you soon."
      );
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus(
        "Oops! Something went wrong. Please try again."
      );
      return;
    }

    setInputField({
      name: "",
      email: "",
      message: "",
    });

    setFormStatus("");

    setTimeout(() => {
      setFormSuccess("");
    }, 4000);
  };

  return (
    <div className="container">
      <section className="top-container">
        <h1>Contact Me</h1>
      </section>

      <section className="contact-container">
        <div className="contact-card">
          <h2>Get In Touch</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={inputField.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={inputField.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={inputField.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="contact-btn">
              Send Message
            </button>

            {formStatus && (
              <p className="form-status">{formStatus}</p>
            )}

            {formSuccess && (
              <p className="form-success">{formSuccess}</p>
            )}
          </form>

          <div className="social-links">
            <a
              href="https://github.com/jonuoha60"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-contact"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/john-onuoha1/"
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
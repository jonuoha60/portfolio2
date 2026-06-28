import { useState } from "react";
import "../../constants/styles/Home.css"
import { Header } from './Header';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { About } from './About';

export const Home = () => {
  const [currentPage, setCurrentPage] = useState("about");
  const [animate, setAnimate] = useState(false);

  const changePage = (page) => {
    if (page === currentPage) return;

    setAnimate(true);

    setTimeout(() => {
      setCurrentPage(page);
      setAnimate(false);
    }, 300);
  };

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={changePage} />

      <div className={`page-wrapper ${animate ? "page-exit" : "page-enter"}`}>
        {currentPage === "about" && <About />}
        {currentPage === "skills" && <Skills />}
        {currentPage === "projects" && <Projects />}
        {currentPage === "contact" && <Contact />}
      </div>
    </>
  );
};
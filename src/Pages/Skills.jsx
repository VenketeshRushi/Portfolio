import { useInView } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import styles from "../Styles/skill.module.css";
import ModalContext from "../datamanager/context/modalContext";
import NavigationContext from "../datamanager/context/navigationContext";
import SkillItem from "./SkillItem";

let SKILLS_DATA = [
  {
    img: "https://shivam-sharma-portfolio.vercel.app/static/media/html.ff3cf75e3b7cbb4ea77c.png",
    name: "HTML",
  },
  {
    img: "https://shivam-sharma-portfolio.vercel.app/static/media/css.84de5dab5fab27f4161c.png",
    name: "CSS",
  },
  {
    img:"https://shivam-sharma-portfolio.vercel.app/static/media/js.4cf889d0c7029602b15d.jpeg",
    name:"JavaScript",
  },
  {
    img: "https://shivam-sharma-portfolio.vercel.app/static/media/react.8a6fc0a24a800d1e0f4a.png",
    name: "React",
  },
  {
    img:"https://shivam-sharma-portfolio.vercel.app/static/media/redux.b3b939c66aecf7d53967.png",
    name: "Redux",
  },
  {
    img: "https://shivam-sharma-portfolio.vercel.app/static/media/node.c6649cb118c1ede849ad.png",
    name: "NodeJs",
  },
  {
    img:"https://shivam-sharma-portfolio.vercel.app/static/media/express.c0da3e38a430d20432f0.png",
    name:"Express"
  },
  {
    img: "https://shivam-sharma-portfolio.vercel.app/static/media/mongo.7f8d1fa4014d58f7e782.jpg",
    name: "MongoDB",
  },
];

const Skills = () => {
  // Get data from the global state
  const { openModal } = useContext(ModalContext);
  const { navigateTo } = useContext(NavigationContext);

  const skillsRef = useRef();
  const isInView = useInView(skillsRef);

  useEffect(() => {
    if (isInView) {
      navigateTo("skills");
    }
  }, [isInView]);

  return (
    <section ref={skillsRef} id="skills" className={styles.skillsSection}>
      <h1 className={styles.skillsHeading}>Skills</h1>

      <span className={styles.skillsDescription}>
        I’m specialized in web development. I do frontend and backend
        applications both using javascripts.
        <br />
        Here is my tech list.
      </span>

      <div className={styles.skillsList}>
        {SKILLS_DATA.slice(0, 8).map((skill, index) => {
          return <SkillItem key={index} data={skill} />;
        })}
      </div>

      <div className={styles.skillsControls}>
        <a
          // href={require("../../../assets/cv/cv.pdf")}
          download={true}
        >
          <Button size="sm" colorScheme="red" color="white" borderRadius={15}>
            Download CV
          </Button>
        </a>
        <Button
          size="sm"
          bg="transparent"
          color="red"
          borderRadius={15}
          border="2px solid red"
          onClick={() => openModal("SKILLS", "Skills")}
        >
          See more
        </Button>
      </div>
    </section>
  );
};

export default Skills;


import styles from "../Styles/skill.module.css";
import SkillItem from "./SkillItem";

let SKILLS_DATA = [
  {
    img: "https://venketeshrushi.github.io/Portfolio/static/media/html.84de5dab5fab27f4161c.png",
    name: "HTML",
  },
  {
    img: "https://venketeshrushi.github.io/Portfolio/static/media/html1.ff3cf75e3b7cbb4ea77c.png",
    name: "CSS",
  },
  {
    img: "https://venketeshrushi.github.io/Portfolio/static/media/js.4cf889d0c7029602b15d.jpeg",
    name: "JavaScript",
  },
  {
    img: "https://venketeshrushi.github.io/Portfolio/static/media/react.8a6fc0a24a800d1e0f4a.png",
    name: "React",
  },
  {
    img: "https://venketeshrushi.github.io/Portfolio/static/media/redux.b3b939c66aecf7d53967.png",
    name: "Redux",
  },
  {
    img: "https://venketeshrushi.github.io/Portfolio/static/media/node.c6649cb118c1ede849ad.png",
    name: "NodeJs",
  },
  {
    img: "https://venketeshrushi.github.io/Portfolio/static/media/express.c0da3e38a430d20432f0.png",
    name: "Express",
  },
  {
    img: "https://venketeshrushi.github.io/Portfolio/static/media/mongo.7f8d1fa4014d58f7e782.jpg",
    name: "MongoDB",
  },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
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

    </section>
  );
};

export default Skills;

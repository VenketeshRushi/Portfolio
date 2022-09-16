import { useEffect } from "react";
import { useState } from "react";
import styles from "../Styles/section.module.css";

function Courosel() {
  const [img, setimg] = useState(require(`../images/indiegogo2.png`));
  const [img1, setimg1] = useState(require(`../images/weatherapp3.png`));
  const imgarr = [
    require(`../images/indiegogo1.png`),
    require(`../images/indiegogo2.png`),
    require(`../images/indiegogo3.png`),
    require(`../images/indiegogo4.png`),
  ];

  const imgarr1 = [
    require(`../images/weatherapp1.png`),
    require(`../images/weatherapp3.png`),
    require(`../images/weatherapp1.png`),
    require(`../images/weatherapp2.png`),
  ];
  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i === 4) {
        i = 0;
      }
      setimg(imgarr[i]);
      setimg1(imgarr1[i]);
      i++;
    }, 4000);
  }, []);

  return (
    <section id="projects">
      <div className={styles.projecttitile}>
        <h1>Projects</h1>
        <h5>
          Since I started working as a web developer I worked on many projects.
        </h5>
        <h5>Let’s dive into this now.</h5>
      </div>
      <div className={styles.container}>
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Indigogo</h3>
            <p>
              It is crowdfunding websites that enable interaction between
              fundraisers and the crowd.
            </p>
            <p>Tech Stack:- HTML,CSS,Javascript,React.js,Chakra</p>
          </div>
          <div className={styles.footer1}>
            <div className={styles.techList}>
              <div
                className={styles.techItem}
                title="HTML"
                style={{ marginLeft: "0px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/html.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="CSS"
                style={{ marginLeft: "25px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/html1.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="JS"
                style={{ marginLeft: "50px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/js.jpeg`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="React"
                style={{ marginLeft: "75px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/react.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Chakra UI"
                style={{ marginLeft: "100px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/abc.png`)}
                  alt="err"
                />
              </div>
            </div>
            <a
              target={"_blank"}
              href="https://loquacious-otter-dcf6e5.netlify.app/"
            >
              <span className={styles.footer}>
                View
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: "5px" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img1} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>SoCloudy</h3>
            <p>
              Web application to show the current and upcoming week weather
              forecast.
            </p>
            <p>Tech Stack:- HTML,CSS,Javascript,React.js</p>
          </div>
          <div className={styles.footer1}>
            <div className={styles.techList}>
              <div
                className={styles.techItem}
                title="HTML"
                style={{ marginLeft: "0px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/html.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="CSS"
                style={{ marginLeft: "25px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/html1.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="JS"
                style={{ marginLeft: "50px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/js.jpeg`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="React"
                style={{ marginLeft: "75px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/react.png`)}
                  alt="err"
                />
              </div>
            </div>
            <a
              target={"_blank"}
              href="https://venketeshrushi.github.io/SoCloudy/"
            >
              <span className={styles.footer}>
                View
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: "5px" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Indigogo</h3>
            <p>
              Replica of Indigogo. Have built the smooth and clean user flow of
              the website from signup and login.
            </p>
          </div>
          <div className={styles.footer1}>
            <div className={styles.techList}>
              <div
                className={styles.techItem}
                title="JavaScript"
                style={{ marginLeft: "0px" }}
              >
                <img
                  className={styles.techItemImage}
                  src="https://shivam-sharma-portfolio.vercel.app/static/media/html.ff3cf75e3b7cbb4ea77c.png"
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Html"
                style={{ marginLeft: "25px" }}
              >
                <img
                  className={styles.techItemImage}
                  src="https://shivam-sharma-portfolio.vercel.app/static/media/css.84de5dab5fab27f4161c.png"
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Css"
                style={{ marginLeft: "50px" }}
              >
                <img
                  className={styles.techItemImage}
                  src="https://shivam-sharma-portfolio.vercel.app/static/media/react.8a6fc0a24a800d1e0f4a.png"
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Bootstrap"
                style={{ marginLeft: "75px" }}
              >
                <img
                  className={styles.techItemImage}
                  src="https://shivam-sharma-portfolio.vercel.app/static/media/node.c6649cb118c1ede849ad.png"
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Netlify"
                style={{ marginLeft: "100px" }}
              >
                <img
                  className={styles.techItemImage}
                  src="https://shivam-sharma-portfolio.vercel.app/static/media/mongo.7f8d1fa4014d58f7e782.jpg"
                  alt="err"
                />
              </div>
            </div>
            <span className={styles.footer}>
              View
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "5px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Courosel;

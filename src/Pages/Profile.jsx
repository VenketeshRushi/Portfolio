import { Flex, Image, Avatar, Text, Box, Button } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import NavigationContext from "../datamanager/context/navigationContext";
import styles from "../Styles/profile.module.css";

const Profile = () => {
  // Get data from the global state
  const { navigateTo } = useContext(NavigationContext);

  const profileRef = useRef();
  const isInView = useInView(profileRef);

  useEffect(() => {
    if (isInView) {
      navigateTo("home");
    }
  }, [isInView]);

  return (
    <section ref={profileRef} id="home">
      <div className={styles.profile}>
        <div className={styles.info}>
          <h1
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              marginBottom: "0px",
            }}
          >
            Hi, I Am
          </h1>
          <h1
            style={{
              color: "rgb(62,75,255)",
              fontSize: "38px",
              fontWeight: "bold",
            }}
          >
            Venketsh Rushi
          </h1>
          <Text fontSize={15}>
            A MERN Stack developer. I have a passion for technology and love
            working on new and exciting technologies emerging nowadays. I'm a
            passionate Developer with good communication skills, good attention
            to detalis and the ability to write efficeint code using MERN Stack.
          </Text>
          <div>
            <a href="https://www.linkedin.com/in/itsurshivam" target="_blank">
              <Button
                colorScheme="red"
                color={"white"}
                borderRadius={50}
                marginTop={2}
              >
                Hire me
              </Button>
            </a>
          </div>
          <div className={styles.socialicon}>
            <button>
              <img src="https://shivam-sharma-portfolio.vercel.app/static/media/Github.b1e14ce74d65a4300933.png" />
            </button>
            <button>
              <img src="https://shivam-sharma-portfolio.vercel.app/static/media/twitter.c5b06f8ca489efc1117a.png" />
            </button>
            <button>
              <img src="https://img.icons8.com/fluency/344/linkedin.png" />
            </button>
          </div>
        </div>
        <div className={styles.avatar}>
          <img
            className="avatarimg"
            alt="kombou dilane"
            src="https://shivam-sharma-portfolio.vercel.app/static/media/profile.f75ec2ce69af03dc4391.png"
          />
          <div className={styles.one}>
            <Image
              boxSize="30px"
              objectFit="contain"
              src="https://shivam-sharma-portfolio.vercel.app/static/media/react.8a6fc0a24a800d1e0f4a.png"
            />
            <Text ml={2} fontSize={15} fontWeight={500}>
              Frontend Developer
            </Text>
          </div>
          <div className={styles.two}>
            <Image
              boxSize="30px"
              objectFit="contain"
              src="https://shivam-sharma-portfolio.vercel.app/static/media/react.8a6fc0a24a800d1e0f4a.png"
            />
            <Text ml={2} fontSize={15} fontWeight={500}>
              Full Stack Developer
            </Text>
          </div>
          <div className={styles.three}>
            <Image
              boxSize="30px"
              objectFit="contain"
              src="https://shivam-sharma-portfolio.vercel.app/static/media/react.8a6fc0a24a800d1e0f4a.png"
            />
            <Text ml={2} fontSize={15} size="sm" fontWeight={500}>
              Backend Developer
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

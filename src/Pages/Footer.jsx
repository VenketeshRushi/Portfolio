import { Box, Text } from "@chakra-ui/react";
import styles from "../Styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Text ml={1} fontSize={14}>
          Venketesh Rushi &copy; Copyright {new Date().getFullYear()}
        </Text>
      </Box>

      <div className={styles.socialicon}>
            <button>
              <a target={"_blank"} href="https://github.com/VenketeshRushi">
                <img
                  src={require(`../images/github.png`)}
                  alt="Github"
                />
              </a>
            </button>

            <button>
              <a href="mailto:rushivenketsh@gmail.com">
                <img src={require(`../images/download.png`)} alt="twitter" />
              </a>
            </button>

            <button>
              <a
                target={"_blank"}
                href="https://www.linkedin.com/in/venketesh-rushi-423722236/"
              >
                <img
                  src="https://img.icons8.com/fluency/344/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </button>
          </div>
    </footer>
  );
};

export default Footer;

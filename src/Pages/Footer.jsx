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
          <img
            src="https://shivam-sharma-portfolio.vercel.app/static/media/Github.b1e14ce74d65a4300933.png"
            alt=""
          />
        </button>
        <button>
          <img
            src="https://shivam-sharma-portfolio.vercel.app/static/media/twitter.c5b06f8ca489efc1117a.png"
            alt=""
          />
        </button>
        <button>
          <img src="https://img.icons8.com/fluency/344/linkedin.png" alt="" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

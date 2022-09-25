import { Heading } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import styles from "../Styles/github.module.css";
function Github() {
  return (
    <>
      <Heading
        size={["sm", "md", "lg"]}
        color="rgb(35,34,34)"
        w={"75%"}
        margin="auto"
        textAlign={"left"}
        marginTop="50px"
        mb={3}
        className={styles.text}
      >
        GitHub Stats
      </Heading>
      <div className={styles.github}>
        <GitHubCalendar
          username="VenketeshRushi"
          fontSize={18}
          color="#ff0000"
        />
      </div>
    </>
  );
}
export default Github;

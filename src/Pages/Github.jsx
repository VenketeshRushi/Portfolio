import { Heading, Stack } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import styles from "../Styles/github.module.css";
function Github() {
  return (
    <>
      <Heading
        size={"lg"}
        fontWeight={"550"}
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
        <Stack mt={5} align={"center"} >
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=VenketeshRushi&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=10&locale=en"
            alt="VenketeshRushi"
            height="139"
          />
          <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=VenketeshRushi&border_radius=10;" alt="VenketeshRushi" />
        </Stack>
      </div>
    </>
  );
}
export default Github;

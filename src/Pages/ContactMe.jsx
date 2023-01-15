import styles from "../Styles/contactme.module.css";

const ContactMe = () => {
  return (
    <section id="contactMe" className={styles.contactMeSection}>
      <h1 className={styles.contactMeHeading}>Contact Me</h1>

      <span className={styles.contactMeDescription}>
        You can use different way to contact me. Choose what you want.
      </span>

      <div className={styles.contactMeContent}>
        <div className={styles.contactMeFirstSection}>
          <div>
            <a target={"_blank"} href="mailto:rushivenketsh@gmail.com">
              <img src={require(`../images/download.png`)} alt="" />
              <h4>rushivenketsh@gmail.com</h4>
            </a>
          </div>
          <div>
            <a target={"_blank"} href="https://github.com/VenketeshRushi">
              <img src={require(`../images/github.png`)} alt="" />
              <h4>@VenketeshRushi</h4>
            </a>
          </div>
          <div>
            <a target={"_blank"} href="https://www.linkedin.com/in/venketesh-rushi-423722236/">
              <img src={require(`../images/download (1).png`)} alt="" />
              <h4>@VenketeshRushi</h4>
            </a>
          </div>
          <div>
            <a target={"_blank"} href="tel:+91 8261805608">
              <img src={require(`../images/download (2).png`)} alt="" />
              <h4>+91 8261805608</h4>
            </a>
          </div>
        </div>

        <div className={styles.contactMeSecondSection}>
          <img
            style={{
              width: "500px",
              height: "auto",
            }}
            src={require(`../images/contactus.png`)}
            alt="err"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

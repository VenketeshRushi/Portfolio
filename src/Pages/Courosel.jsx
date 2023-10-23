import { useContext, useEffect } from "react";
import { useState } from "react";
import styles from "../Styles/section.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Button,
  Box,
} from "@chakra-ui/react";
import { AuthContext } from "./context";

function Courosel() {
  const { state, dispatch } = useContext(AuthContext);
  const [img, setimg] = useState(require(`../images/ni2.png`));
  const [img1, setimg1] = useState(require(`../images/weatherapp3.png`));
  const [img2, setimg2] = useState(require(`../images/tm.png`));
  const [img4, setimg4] = useState(require(`../images/t3.png`));
  const [img5, setimg5] = useState(require(`../images/b2.png`));
  const [img6, setimg6] = useState(require(`../images/bt1.png`));

  const imgarr = [
    require(`../images/ni1.png`),
    require(`../images/ni2.png`),
    require(`../images/ni3.png`),
    require(`../images/ni4.png`),
  ];

  const imgarr2 = [
    require(`../images/tm1.png`),
    require(`../images/tm2.png`),
    require(`../images/tm3.png`),
    require(`../images/tm.png`),
  ];

  const imgarr1 = [
    require(`../images/weatherapp1.png`),
    require(`../images/weatherapp3.png`),
    require(`../images/weatherapp1.png`),
    require(`../images/weatherapp2.png`),
  ];

  const imgarr4 = [
    require(`../images/t1.png`),
    require(`../images/t2.png`),
    require(`../images/t3.png`),
    require(`../images/t1.png`),
  ];

  const imgarr5 = [
    require(`../images/b3.png`),
    require(`../images/b4.png`),
    require(`../images/b5.png`),
    require(`../images/b2.png`),
  ];

  const imgarr6 = [
    require(`../images/bt2.png`),
    require(`../images/bt3.png`),
    require(`../images/bt4.png`),
    require(`../images/bt5.png`),
  ];

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i === 4) {
        i = 0;
      }
      setimg(imgarr[i]);
      setimg1(imgarr1[i]);
      setimg2(imgarr2[i]);
      setimg4(imgarr4[i]);
      setimg5(imgarr5[i]);
      setimg6(imgarr6[i]);
      i++;
    }, 5500);
  }, []);

  const onCloseindiegogo = () => {
    dispatch({ type: "closeindiegogo" });
  };

  const onClose = () => {
    dispatch({ type: "closesocloudy" });
  };

  const onCloseBus = () => {
    dispatch({ type: "closebus" });
  }
  return (
    <section id="projects">
      <Modal
        isOpen={state.isOpenNowindiegogo}
        onClose={onCloseindiegogo}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          fontFamily={"Nunito-Regular"}
          fontWeight={"bold"}
          color={"black"}
        >
          <ModalHeader>Nike Clone</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img} alt="img" />
            </div>
            <br />
            <div className={styles.textdata}>
              <p>
                It's a MERN Stack E-commerce web application with all the major
                functionalities
              </p>
              <h3>Features</h3>
              <ul>
                <li>Login / Sign Up / Reset Password</li>
                <li>Product Filtering and Sorting</li>
                <li>Add To Cart And Remove From Cart</li>
                <li>Wishlist Add and Remove Items</li>
                <li>Razorpay Payment Gateway</li>
                <li>Darkmode available</li>
              </ul>
              <p>
                Tech Stack:- HTML, CSS, Javascript, React.js, Redux, Node.js,
                Express, MongoDB
              </p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href="https://github.com/VenketeshRushi/ecom-client"
              >
                <Button
                  size="sm"
                  bg="transparent"
                  color="red"
                  borderRadius={15}
                  border="2px solid red"
                >
                  Source Code
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://ecom-client-five.vercel.app/"
              >
                <Button
                  size="sm"
                  bg="transparent"
                  color="red"
                  borderRadius={15}
                  border="2px solid red"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>
          <ModalFooter
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            alignItems={"flex-end"}
          >
            <Box className={styles.techList}>
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
                title="Redux"
                style={{ marginLeft: "100px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/redux.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Node.Js"
                style={{ marginLeft: "120px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/node.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Express"
                style={{ marginLeft: "150px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/express.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="MongoDB"
                style={{ marginLeft: "175px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/mongo.jpg`)}
                  alt="err"
                />
              </div>
            </Box>
            <Button
              size="sm"
              bg="transparent"
              color="red"
              borderRadius={15}
              border="2px solid red"
              mr={3}
              onClick={onCloseindiegogo}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={state.bus}
        onClose={onCloseBus}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          fontFamily={"Nunito-Regular"}
          fontWeight={"bold"}
          color={"black"}
        >
          <ModalHeader>Blue Bus</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img6} alt="img" />
            </div>
            <br />
            <div className={styles.textdata}>
              <p>
                It's a MERN Stack Bus Ticket Booking web application with all the major functionalities.
              </p>
              <h3>Features</h3>
              <ul>
                <li>Login / Sign Up</li>
                <li>Search Functionality</li>
                <li>Bus Ticket Booking</li>
                <li>Filter Buses Based on Types, Time, etc.</li>
                <li>View Past and Upcoming Tickets</li>
                <li>Payment Integration with Razorpay</li>
              </ul>
              <p>
                Tech Stack:- HTML, CSS, Javascript, React.js, Redux, Node.js,
                Express, MongoDB
              </p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href="https://github.com/VenketeshRushi/new-bus"
              >
                <Button
                  size="sm"
                  bg="transparent"
                  color="red"
                  borderRadius={15}
                  border="2px solid red"
                >
                  Source Code
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://64c8934c58159a3cd96ff9cf--rococo-biscuit-257cba.netlify.app/"
              >
                <Button
                  size="sm"
                  bg="transparent"
                  color="red"
                  borderRadius={15}
                  border="2px solid red"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>
          <ModalFooter
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            alignItems={"flex-end"}
          >
            <Box className={styles.techList}>
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
                title="Redux"
                style={{ marginLeft: "100px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/redux.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Node.Js"
                style={{ marginLeft: "120px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/node.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Express"
                style={{ marginLeft: "150px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/express.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="MongoDB"
                style={{ marginLeft: "175px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/mongo.jpg`)}
                  alt="err"
                />
              </div>
            </Box>
            <Button
              size="sm"
              bg="transparent"
              color="red"
              borderRadius={15}
              border="2px solid red"
              mr={3}
              onClick={onCloseBus}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={state.isOpenNow} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SoCloudy</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            fontFamily={"Nunito-Regular"}
            fontWeight={"bold"}
            color={"black"}
          >
            <div>
              <img className={styles.carouselItemImage} src={img1} alt="img" />
            </div>
            <div className={styles.textdata}>
              <p>
                Web application to show the current and upcoming week weather
                forecast.
              </p>
              <h3>Features</h3>
              <ul>
                <li>Search weather details according to the city.</li>
                <li>
                  Detect your current location for displaying weather data.
                </li>
                <li>Shows a map of that location.</li>
              </ul>
              <p>Tech Stack:- HTML, CSS, Javascript, React.js</p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href="https://github.com/VenketeshRushi/SoCloudy"
              >
                <Button
                  size="sm"
                  bg="transparent"
                  color="red"
                  borderRadius={10}
                  border="2px solid red"
                >
                  Source Code
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://venketeshrushi.github.io/SoCloudy/"
              >
                <Button
                  size="sm"
                  bg="transparent"
                  color="red"
                  borderRadius={10}
                  border="2px solid red"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>

          <ModalFooter
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            alignItems={"flex-end"}
          >
            <Box className={styles.techList}>
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
            </Box>
            <Button
              size="sm"
              bg="transparent"
              color="red"
              borderRadius={15}
              border="2px solid red"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={state.isOpenNowtranslator}
        onClose={() => dispatch({ type: "closetranslator" })}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          fontFamily={"Nunito-Regular"}
          fontWeight={"bold"}
          color={"black"}
        >
          <ModalHeader>Translator App</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img4} alt="img" />
            </div>
            <div className={styles.textdata}>
              <p>
                It is translator app. which translate automaticaly and whenever
                you type something.
              </p>
              <h3>Features</h3>
              <ul>
                <li>Translate automatically without clicking on any button.</li>
                <li>Word count feature available.</li>
              </ul>
              <p>Tech Stack:- HTML, CSS, Javascript, React.js</p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href="https://github.com/VenketeshRushi/TranslatorApp"
              >
                <Button
                  size="sm"
                  bg="transparent"
                  color="red"
                  borderRadius={15}
                  border="2px solid red"
                >
                  Source Code
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://VenketeshRushi.github.io/TranslatorApp"
              >
                <Button
                  size="sm"
                  bg="transparent"
                  color="red"
                  borderRadius={15}
                  border="2px solid red"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>
          <ModalFooter
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            alignItems={"flex-end"}
          >
            <Box className={styles.techList}>
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
            </Box>
            <Button
              size="sm"
              bg="transparent"
              color="red"
              borderRadius={15}
              border="2px solid red"
              mr={3}
              onClick={() => dispatch({ type: "closetranslator" })}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={state.isOpenNowtmetric}
        onClose={() => dispatch({ type: "closetmetric" })}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          fontFamily={"Nunito-Regular"}
          fontWeight={"bold"}
          color={"black"}
        >
          <ModalHeader>Tmetric</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img2} alt="img" />
            </div>
            <div className={styles.textdata}>
              <p>
                This is the clone of TMetric. we cloned login & signup,
                homepage, navbar, main app, time tracking, task creation and
                many more...
              </p>
              <h3>Features</h3>
              <ul>
                <li>Login/Signup .</li>
                <li>Create task and start tracking immediately .</li>
                <li>Delete and mark complete/incomplete task immediately.</li>
              </ul>
              <p>
                Tech Stack:- HTML, CSS, Javascript, React.js, <br />
                Redux, Node.Js, Express, MongoDB
              </p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection="column"
              mt={5}
              mb={3}
            >
              <Stack
                w={"100%"}
                display={"flex"}
                justifyContent={"space-around"}
                alignItems={"baseline"}
                flexDirection="row"
              >
                <a
                  target={"_blank"}
                  href="https://github.com/IamSanjayGupta/dazzling-measure-5625"
                >
                  <Button
                    size="sm"
                    bg="transparent"
                    color="red"
                    borderRadius={15}
                    border="2px solid red"
                  >
                    Source Code Frontend
                  </Button>
                </a>
                <a
                  target={"_blank"}
                  href="https://github.com/VenketeshRushi/tmetric-backend"
                >
                  <Button
                    size="sm"
                    bg="transparent"
                    color="red"
                    borderRadius={15}
                    border="2px solid red"
                  >
                    Source Code Backend
                  </Button>
                </a>
              </Stack>
              <a target={"_blank"} href="https://tmetric-beta.vercel.app/">
                <Button
                  size="sm"
                  bg="transparent"
                  color="red"
                  borderRadius={15}
                  border="2px solid red"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>
          <ModalFooter
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            alignItems={"flex-end"}
          >
            <Box className={styles.techList}>
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
                title="Redux"
                style={{ marginLeft: "100px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/redux.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Node.Js"
                style={{ marginLeft: "120px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/node.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Express"
                style={{ marginLeft: "150px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/express.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="MongoDB"
                style={{ marginLeft: "175px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/mongo.jpg`)}
                  alt="err"
                />
              </div>
            </Box>
            <Button
              size="sm"
              bg="transparent"
              color="red"
              borderRadius={15}
              border="2px solid red"
              mr={3}
              onClick={() => dispatch({ type: "closetmetric" })}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={state.isimgdrive}
        onClose={() => dispatch({ type: "closeimgdrive" })}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          fontFamily={"Nunito-Regular"}
          fontWeight={"bold"}
          color={"black"}
        >
          <ModalHeader>Mini-Blog Web-App</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img className={styles.carouselItemImage} src={img5} alt="img" />
            </div>
            <div className={styles.textdata}>
              <p>
                Where user can see all the blogs from our website and the
                members of our website can upload and delete their blogs.
              </p>
              <h3>Features</h3>
              <ul>
                <li>User can Login and Signup.(Used JWT Authentication)</li>
                <li>
                  Member of our website can upload blog and delete blog. <br />{" "}
                  (Used RBAC)
                </li>
                <li>Members can add image to there blog.</li>
                <li>
                  All the blogs from all members are shown on homepage so all
                  users can see all blogs.
                </li>
              </ul>
              <p>
                Tech Stack:- HTML, CSS, Javascript, React.js, <br />
                Redux, Node.Js, Express, MongoDB
              </p>
            </div>
            <Stack
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"baseline"}
              flexDirection="row"
              mt={5}
              mb={3}
            >
              <a
                target={"_blank"}
                href="https://github.com/VenketeshRushi/Blog-app"
              >
                <Button
                  size="sm"
                  bg="transparent"
                  color="red"
                  borderRadius={15}
                  border="2px solid red"
                >
                  Source Code
                </Button>
              </a>
              <a
                target={"_blank"}
                href="https://creative-raindrop-ba1a4e.netlify.app/"
              >
                <Button
                  size="sm"
                  bg="transparent"
                  color="red"
                  borderRadius={15}
                  border="2px solid red"
                >
                  Open Live
                </Button>
              </a>
            </Stack>
          </ModalBody>
          <ModalFooter
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            alignItems={"flex-end"}
          >
            <Box className={styles.techList}>
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
                title="Redux"
                style={{ marginLeft: "100px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/redux.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Node.Js"
                style={{ marginLeft: "120px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/node.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Express"
                style={{ marginLeft: "150px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/express.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="MongoDB"
                style={{ marginLeft: "175px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/mongo.jpg`)}
                  alt="err"
                />
              </div>
            </Box>
            <Button
              size="sm"
              bg="transparent"
              color="red"
              borderRadius={15}
              border="2px solid red"
              mr={3}
              onClick={() => dispatch({ type: "closeimgdrive" })}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
            <img className={styles.carouselItemImage} src={img5} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Mini-Blog App</h3>
            <p>
              Where user can see all the blogs from our website and the members
              of our website can upload and delete their blogs.
            </p>
            <p>
              Tech Stack:- HTML, CSS, Javascript, React.js,
              <br />
              Redux, Node.js, Express, MongoDB
            </p>
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
                title="Redux"
                style={{ marginLeft: "100px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/redux.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Node.Js"
                style={{ marginLeft: "120px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/node.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Express"
                style={{ marginLeft: "150px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/express.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="MongoDB"
                style={{ marginLeft: "175px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/mongo.jpg`)}
                  alt="err"
                />
              </div>
            </div>
            <span
              onClick={() => dispatch({ type: "openimgdrive" })}
              className={styles.footer}
            >
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
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Nike Clone</h3>
            <p>
              It is a clone Nike Website. It's a MERN Stack E-commerce web
              application with all the major functionalities
            </p>
            <p>
              Tech Stack:- HTML, CSS, Javascript, React.js, Redux, Node.js,
              Express, MongoDB
            </p>
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
                title="Redux"
                style={{ marginLeft: "100px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/redux.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Node.Js"
                style={{ marginLeft: "120px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/node.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Express"
                style={{ marginLeft: "150px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/express.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="MongoDB"
                style={{ marginLeft: "175px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/mongo.jpg`)}
                  alt="err"
                />
              </div>
            </div>
            <span
              onClick={() => dispatch({ type: "openindiegogo" })}
              className={styles.footer}
            >
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
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img6} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Blue Bus</h3>
            <p>
              It's a MERN Stack Bus Ticket Booking web application with all the major functionalities.
            </p>
            <p>
              Tech Stack:- HTML, CSS, Javascript, React.js, Redux, Node.js,
              Express, MongoDB
            </p>
            <br />
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
                title="Redux"
                style={{ marginLeft: "100px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/redux.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Node.Js"
                style={{ marginLeft: "120px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/node.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Express"
                style={{ marginLeft: "150px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/express.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="MongoDB"
                style={{ marginLeft: "175px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/mongo.jpg`)}
                  alt="err"
                />
              </div>
            </div>
            <span
              onClick={() => dispatch({ type: "openbus" })}
              className={styles.footer}
            >
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
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img2} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Tmetric Clone</h3>
            <p>
              This is the clone of TMetric. we cloned login & signup, homepage,
              navbar, main app, time tracking, task creation and many more
            </p>
            <p>
              Tech Stack:- HTML, CSS, Javascript, React.js,
              <br />
              Redux, Node.js, Express, MongoDB
            </p>
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
                title="Redux"
                style={{ marginLeft: "100px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/redux.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Node.Js"
                style={{ marginLeft: "120px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/node.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="Express"
                style={{ marginLeft: "150px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/express.png`)}
                  alt="err"
                />
              </div>
              <div
                className={styles.techItem}
                title="MongoDB"
                style={{ marginLeft: "175px" }}
              >
                <img
                  className={styles.techItemImage}
                  src={require(`../images/mongo.jpg`)}
                  alt="err"
                />
              </div>
            </div>
            <span
              onClick={() => dispatch({ type: "opentmetric" })}
              className={styles.footer}
            >
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
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img1} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>SoCloudy</h3>
            <p>
              Web application to show the current and upcoming week weather
              forecast and show map of that city also.
            </p>
            <p>Tech Stack:- HTML, CSS, Javascript, React.js</p>
            <br />
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
            <span
              onClick={() => dispatch({ type: "opensocloudy" })}
              className={styles.footer}
            >
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
        <div className={styles.carouselItem}>
          <div>
            <img className={styles.carouselItemImage} src={img4} alt="img" />
          </div>
          <div className={styles.textdata}>
            <h3>Translator App</h3>
            <p>
              It is translator web-application. <br /> which translate
              automaticaly and whenever you type something.
            </p>
            <p>Tech Stack:- HTML, CSS, Javascript, React.js</p>
            <br />
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
            <span
              onClick={() => dispatch({ type: "opentranslator" })}
              className={styles.footer}
            >
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

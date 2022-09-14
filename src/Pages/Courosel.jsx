import { Container, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

function Courosel() {
  const [img, setimg] = useState(
    "https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Leather-Belts-Assorted-Header_1944x.jpg?v=1659470925"
  );
  const imgarr = [
    "https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Koru-Rucksack-Pacific-Moss_1944x.jpg?v=1659640187",
    "https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Camera-Strap-Lifestyle-Header-01_1944x.jpg?v=1659471822",
    "https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Leather-Belts-Assorted-Header_1944x.jpg?v=1659470925",
  ];
  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i === 3) {
        i = 0;
      }
      setimg(imgarr[i]);
      i++;
    }, 3000);
  }, []);

  return (
    <section id="projects">
      <Container>
        <Heading>Projects</Heading>
        <Text>
          Since I started working as a web developer I worked on many projects.
        </Text>
        <Text>Let’s dive into this now.</Text>
      </Container>
      <div>
        <img src={img} alt="img" />
      </div>
    </section>
  );
}
export default Courosel;

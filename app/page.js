import Image from "next/image";
import { Container, BackgroundImage, Flex } from "@mantine/core";

export default function Home() {
  return (
    <BackgroundImage src="./assets/hero_home_bg.png">
      <Container className="container hero__container">
        <Flex justify="center" align="center" direction="column" wrap="wrap">
          <p className="hero__description">Housing in Bergen, Norway</p>
          <h1 className="hero__heading-light">
            Elevate your holidays with Holidaze. <br /> Explore, Book, and Relax
          </h1>
        </Flex>
      </Container>
    </BackgroundImage>
  );
}

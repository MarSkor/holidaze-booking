import {
  Flex,
  Container,
  Group,
  Button,
  Image,
  SimpleGrid,
} from "@mantine/core";
import { Heading } from "@/components/common/heading";
import { IconArrowRight } from "@/components/common/icons";

const AboutUs = () => {
  return (
    <section className="container">
      <Container fluid className="about-us__wrapper">
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: "10", sm: "xl" }}
          verticalSpacing={{ base: "xl" }}
        >
          <Flex
            className="about-us__left-content"
            justify="center"
            align="flex-start"
            direction="column"
            wrap="wrap"
          >
            <Heading
              variant="left"
              label="About us"
              title="Reasons to book with Holidaze"
            />
            <div className="about-us__paragraph mb-40">
              <p className="mb-8">
                {" "}
                Magna aliquet arcu lacus, erat libero ut non. Ridiculus nisl
                aliquam leo malesuada ullamcorper.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor leo senectus mattis nisi placerat sit sit eget. Sed
                rhoncus nisi, venenatis massa turpis imperdiet consequat,
                sodales.
              </p>
            </div>
            <div className="about-us__button">
              <Button
                variant="outline"
                className="btn btn-outline"
                rightSection={<IconArrowRight />}
              >
                Learn More
              </Button>
            </div>
          </Flex>
          <Image radius="md" src="./assets/about-us.png" alt="about us" />
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default AboutUs;

import { Heading } from "@/components/common/heading";
import { BadgeCard } from "@/components/common/card";
import { Flex, Container } from "@mantine/core";

const Featured = () => {
  return (
    <section className="container-color_featured featured">
      <Container fluid className="container featured__wrapper">
        <Heading
          variant="center"
          label="Top rated accommodations for you "
          title="Featured"
        />

        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ base: "center", sm: "center" }}
        >
          <BadgeCard />
          <BadgeCard />
          <BadgeCard />
        </Flex>
      </Container>
    </section>
  );
};

export default Featured;

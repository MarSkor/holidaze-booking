import { Flex } from "@mantine/core";

const Banner = () => {
  return (
    <section className="banner">
      <Flex
        className="container banner__inner"
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify={{ sm: "space-between" }}
        align={{ base: "center" }}
      >
        <h2>Book with confidence</h2>
        <hr className="banner__line" />
        <p className="banner__paragraph">
          Our platform offers a vast array of accommodations, ensuring that
          every traveler finds a perfect match for their needs and preferences.
        </p>
      </Flex>
    </section>
  );
};

export default Banner;

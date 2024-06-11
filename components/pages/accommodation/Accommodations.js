import React from "react";
import { Container, Flex } from "@mantine/core";
import { BadgeCard } from "@/components/common/card";

const Accommodations = () => {
  return (
    <section className="accommodations pb-120">
      <Container fluid className="container ">
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap="sm"
          justify={{ sm: "center", md: "space-between" }}
          wrap="wrap"
        >
          <BadgeCard />
          <BadgeCard />
          <BadgeCard />
          <BadgeCard />
          <BadgeCard />
          <BadgeCard />
          <BadgeCard />
          <BadgeCard />
        </Flex>
      </Container>
    </section>
  );
};

export default Accommodations;

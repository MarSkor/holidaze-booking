"use client";
import { useMediaQuery } from "@mantine/hooks";
import { Badge, Flex, Select, Button } from "@mantine/core";
import FilterDesktop from "./FilterDesktop";
import FilterMobile from "./FilterMobile";
import { IconCancel } from "@/components/common/icons";

const BookingField = () => {
  const matches = useMediaQuery("(min-width: 56.25em)");

  return (
    <Flex direction="column">
      <Flex align="center" gap={{ base: "sm", sm: "xl" }}>
        <Select
          placeholder="Sort by"
          data={[
            "Popularity (high to low)",
            "Popularity (low to high)",
            "Our picks",
            "Something",
          ]}
        />
        {matches ? <FilterDesktop /> : <FilterMobile />}
      </Flex>
      <Flex align="center">
        <Button variant="primary" className="btn btn-primary">
          empty filters
        </Button>
        <Badge
          className="filter-badge"
          leftSection={<IconCancel />}
          radius="sm"
          size="lg"
        >
          filter here
        </Badge>
      </Flex>
    </Flex>
  );
};

export default BookingField;

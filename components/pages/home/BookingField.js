import {
  Select,
  rem,
  Flex,
  Button,
  NumberInput,
  Container,
} from "@mantine/core";
import { IconHome, IconUser, IconCalendar } from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";
import { SimpleGrid } from "@mantine/core";

const BookingField = () => {
  return (
    <Container className="container">
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify={{ sm: "center" }}
        p={20}
        className="hero__bookingfield-wrapper"
      >
        <Select
          label="Accommodation"
          placeholder="Select type"
          data={["Guesthouse", "B&B", "Hotel"]}
          leftSectionPointerEvents="none"
          leftSection={<IconHome style={{ width: rem(16), height: rem(16) }} />}
          clearable
        />
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <DatePickerInput
            pointer
            leftSection={
              <IconCalendar style={{ width: rem(16), height: rem(16) }} />
            }
            label="Check in"
            placeholder="Select date"
            clearable
          />
          <DatePickerInput
            pointer
            leftSection={
              <IconCalendar style={{ width: rem(16), height: rem(16) }} />
            }
            label="Check Out"
            placeholder="Select date"
            clearable
          />
        </SimpleGrid>

        <NumberInput
          label="Guests"
          placeholder="Guests"
          min={1}
          max={6}
          leftSectionPointerEvents="none"
          leftSection={<IconUser style={{ width: rem(16), height: rem(16) }} />}
          clearable
        />
        <Button variant="filled">Search</Button>
      </Flex>
    </Container>
  );
};

export default BookingField;

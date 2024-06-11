import { Container } from "@mantine/core";
import { Heading } from "@/components/common/heading";
import BookingField from "./BookingField";

const Header = () => {
  return (
    <section className="accommodation-header section-spacing">
      <Container className="container">
        <Heading title="Accommodations" />
        <BookingField />
      </Container>
    </section>
  );
};

export default Header;

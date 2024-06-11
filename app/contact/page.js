import { Container, Flex, SimpleGrid } from "@mantine/core";
import { ContactForm, ContactInformation } from "@/components/pages/contactus";

const page = () => {
  return (
    <section className="container-color_contactus contactus">
      <Container className="container">
        <div className="contactus__wrapper">
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
            <ContactInformation />
            <ContactForm />
          </SimpleGrid>
        </div>
      </Container>
    </section>
  );
};

export default page;

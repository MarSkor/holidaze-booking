import {
  Text,
  Button,
  TextInput,
  Textarea,
  SimpleGrid,
  Flex,
} from "@mantine/core";
import { IconSent } from "@/components/common/icons";

const ContactForm = () => {
  return (
    <form className="contactform">
      <div className="contactform__wrapper">
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          className="contactform__input-fields"
        >
          <TextInput
            label="First name"
            placeholder="First Name"
            required
            classNames={{
              input: "contactform__input",
              label: "contactform__inputLabel",
            }}
          />
          <TextInput
            label="Last name"
            placeholder="Last name"
            required
            classNames={{
              input: "contactform__input",
              label: "contactform__inputLabel",
            }}
          />
        </SimpleGrid>
        <TextInput
          label="Subject"
          placeholder="Subject"
          required
          classNames={{
            input: "contactform__input",
            label: "contactform__inputLabel",
          }}
          mt="md"
        />
        <TextInput
          label="Your email"
          placeholder="hello@holidaze.dev"
          required
          classNames={{
            input: "contactform__input",
            label: "contactform__inputLabel",
          }}
          mt="md"
        />
        <Textarea
          required
          label="Your message"
          placeholder="I'm having some issues with..."
          maxRows={8}
          minRows={8}
          autosize
          mt="md"
          classNames={{
            input: "contactform__input",
            label: "contactform__inputLabel",
          }}
        />
        <Flex
          justify="center"
          direction="column"
          mt="md"
          className="contactform__button-wrap"
        >
          <Button
            size="md"
            fullWidth="true"
            type="submit"
            className="contactform__control btn btn-primary"
            rightSection={<IconSent color="$clr-white-100" />}
            radius="xs"
          >
            Send message
          </Button>
          {/* <Text mt="sm" size="xs" c="dimmed">
            *No message will be sent, only displayed in modal popup for
            showcase.
          </Text> */}
        </Flex>
      </div>
    </form>
  );
};

export default ContactForm;

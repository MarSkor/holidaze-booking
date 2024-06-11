import { Text, Box, ActionIcon, Stack, Group } from "@mantine/core";
import { CONTACT_US } from "./data";
import {
  IconTwitter,
  IconFacebook,
  IconInstagram,
} from "@/components/common/icons";
const social = [IconTwitter, IconFacebook, IconInstagram];

const ContactIcon = ({
  contacticon__icon: Icon,
  title,
  description,
  ...others
}) => {
  return (
    <div className="contacticon__wrapper" {...others}>
      <Box mr="md" className="contacticon__icon-wrapper">
        <Icon
          className="contacticon__icon"
          style={{ width: "24px", height: "24px" }}
        />
      </Box>
      <div>
        <h5 className="contacticon__title">{title}</h5>
        <p className="contacticon__description">{description}</p>
      </div>
    </div>
  );
};

export function ContactIconsList() {
  const items = CONTACT_US.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

const ContactInformation = () => {
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className="contactinfo__social"
      variant="transparent"
    >
      <Icon style={{ width: "24px", height: "24px" }} />
    </ActionIcon>
  ));
  return (
    <div>
      <h1 className="contactinfo__title">
        Need help? <br /> Contact us
      </h1>
      <p className="contactinfo__description">
        Leave your email and we will get back to you within 24 hours
      </p>

      <ContactIconsList />

      <Group mt="xl">{icons}</Group>
    </div>
  );
};

export default ContactInformation;

import {
  Card,
  Badge,
  Image,
  Group,
  Text,
  Button,
  CardSection,
  Flex,
} from "@mantine/core";
import { IconLocation, IconStar } from "../icons";
import IconSwitch from "@/utils/IconSwitch";

const mockData = {
  image:
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "Lorem Hotel",
  location: "somewhere in Bergen",
  badges: [
    { type: "Double bed", quantity: "1", slug: "double-bed" },
    { type: "People", quantity: "2", slug: "multiple-users" },
  ],
  price: "50",
  ratings: { total_rating: 4.6, total_reviews: 123 },
};

const BadgeCard = () => {
  const { image, title, location, badges, price, ratings } = mockData;
  const features = badges.map((badge) => (
    <Badge
      variant="light"
      radius="sm"
      key={badge.type}
      leftSection={IconSwitch(badge.slug)}
      size="lg"
      classNames={{
        root: "badge__root",
        label: "badge__label",
      }}
    >
      {badge.quantity} {badge.type}
    </Badge>
  ));

  return (
    <Card shadow="sm" padding="lg" radius="md" className="card">
      <CardSection className="card__image-section">
        <Image src={image} alt={title} height={180} />
        <Flex align="center" className="card__review">
          <IconStar />
          <Flex align="center" className="ml-4">
            <p>{ratings.total_rating}</p>
            <span className="ml-4">({ratings.total_reviews})</span>
          </Flex>
        </Flex>
      </CardSection>

      <CardSection className="card__section" mt="md">
        <Group className="card__section--group" justify="space-between">
          <h3 className="card__title">{title}</h3>
        </Group>

        <Group className="card__icon-group mt-16 ">
          <Flex align="center" className="card__location">
            <IconLocation />
            <Text className=" ml-8">{location}</Text>
          </Flex>
        </Group>
      </CardSection>

      <CardSection className="card__section" mt="md">
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </CardSection>

      <Group mt="xs" className="card__footer" grow>
        <Flex align="center" className="card__footer--price">
          <Text fw={500}>${price} </Text>
          <Text c="dimmed"> / night</Text>
        </Flex>

        <Button className="btn btn-light" radius="md" style={{ flex: 1 }}>
          Book Now
        </Button>
      </Group>
    </Card>
  );
};

export default BadgeCard;

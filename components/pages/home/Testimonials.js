"use client";
import { Container, Paper, Flex, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";
import NextImage from "next/image";
// import { Carousel } from "@mantine/carousel";

const Card = (props) => {
  return (
    <Paper shadow="md" p="xl" radius="md" className="testimonial-card">
      <Flex className="testimonial-card__header">
        <div className="testimonial-card__img-wrap">
          <Image component={NextImage} src={props.image} alt={props.name} />
        </div>
        <div className="testimonial-card__heading">
          <h5>{props.name}</h5>
          <p>{props.rating}</p>
        </div>
      </Flex>
      <p>{props.text}</p>
    </Paper>
  );
};

const mockData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Tompson",
    rating: 5,
    text: "I can't recommend Holidaze enough! The accommodation we booked exceeded our expectations, and the customer service was outstanding. ",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Tompson",
    rating: 5,
    text: "I can't recommend Holidaze enough! The accommodation we booked exceeded our expectations, and the customer service was outstanding. ",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Tompson",
    rating: 5,
    text: "I can't recommend Holidaze enough! The accommodation we booked exceeded our expectations, and the customer service was outstanding. ",
  },
];

const Testimonials = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  // const slides = data.map((item) => (
  //   <Carousel.Slide key={item.title}>
  //     <Card {...item} />
  //   </Carousel.Slide>
  // ));

  return (
    <section className="testimonials">
      <Container className="container">
        {/* <Carousel 
        slideSize={{ base: '100%', sm: '50%' }}
        slideGap={{ base: rem(2), sm: 'xl' }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        >
          {slides}
        </Carousel> */}
      </Container>
    </section>
  );
};

export default Testimonials;

"use client";
import {
  Group,
  Button,
  Divider,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Autocomplete,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavLink from "./NavLink";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import HolidazeLogo from "./HolidazeLogo";

const links = [
  { link: "/", label: "Home" },
  { link: "/accommodation", label: "Accommodation" },
  { link: "/about", label: "About us" },
  { link: "/contact", label: "Contact us" },
];

const Navigation = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <header className="header">
      <Group justify="space-between" h="100%" className="header__wrapper">
        <HolidazeLogo />
        <Group h="100%" gap={0} visibleFrom="sm">
          {links.map((link) => (
            <NavLink key={link.link} href={link.link} text={link.label} />
          ))}
        </Group>

        <Group visibleFrom="sm">
          {/* to be fixed: search option  */}
          <IconSearch
            style={{ width: rem(16), height: rem(16), color: "#c5bcb3" }}
            stroke={1.5}
          />
          <Button
            className="btn btn-tertiary"
            variant="transparent"
            color="#c5bcb3"
            component={Link}
            href={"/login"}
          >
            Log in
          </Button>
          <Button
            className="btn btn-secondary"
            variant="outline"
            color="#c5bcb3"
            component={Link}
            href={"/accommodation"}
          >
            Book Now
          </Button>
        </Group>
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom="sm"
          color="#c5bcb3"
        />
      </Group>

      {/* The responsive navbar */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Holidaze Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
        classNames={{
          root: "header__drawer-root",
          header: "header__drawer-root__header",
          title: "header__drawer-root__title",
          content: "header__drawer-root__content",
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md" color="pink">
          <Divider my="sm" color="#282828" />
          {links.map((link) => (
            <NavLink key={link.link} href={link.link} text={link.label} />
          ))}
          <Divider my="sm" color="#282828" />

          <Group
            justify="center"
            grow
            pb="xl"
            px="md"
            className="header__btn-group"
          >
            <Button
              variant="transparent"
              component={Link}
              href={"/login"}
              color="#c5bcb3"
            >
              Log in
            </Button>
            <Button
              variant="outline"
              color="#c5bcb3"
              component={Link}
              href={"/accommodation"}
              className="btn-primary"
            >
              Book Now
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </header>
  );
};

export default Navigation;

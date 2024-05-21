"use client";
import {
  Group,
  Button,
  Divider,
  Box,
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

const Navigation = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box>
      <header className="header">
        <Group justify="space-between" h="100%" className="header__wrapper">
          <HolidazeLogo />

          <Group h="100%" gap={0} visibleFrom="sm">
            <NavLink href={"/"} text={"Home"} />
            <NavLink href={"/accommodation"} text={"Accommodation"} />
            <NavLink href={"/contact"} text={"Contact us"} />
            <NavLink href={"/about"} text={"About us"} />
          </Group>

          <Group visibleFrom="sm">
            <IconSearch
              style={{ width: rem(16), height: rem(16), color: "#c5bcb3" }}
              stroke={1.5}
            />
            {/* // ADDING SEARCH FUNCTIONALITY LATER */}
            {/* <Autocomplete
              className={classes.search}
              placeholder="Search"
              leftSection={
                <IconSearch
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
              data={[
                "React",
                "Angular",
                "Vue",
                "Next.js",
                "Riot.js",
                "Svelte",
                "Blitz.js",
              ]}
              visibleFrom="xs"
            /> */}
            <Button
              variant="transparent"
              color="#c5bcb3"
              component={Link}
              href={"/login"}
            >
              Log in
            </Button>
            <Button
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
      </header>

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
          <NavLink href={"/"} text={"Home"} />
          <NavLink href={"/accommodation"} text={"Accommodation"} />
          <NavLink href={"/contact"} text={"Contact us"} />
          <NavLink href={"/about"} text={"About us"} />
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
    </Box>
  );
};

export default Navigation;

import { useState } from "react";
import {
  Drawer,
  Accordion,
  Flex,
  SimpleGrid,
  NumberInput,
  ActionIcon,
  Select,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCancel, IconFilter } from "@/components/common/icons";
import { RangeSlider } from "@/components/common/slider";

const FilterMobile = () => {
  const [value, setValue] = useState({ min: 50, max: 500 });
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        size="85%"
        overlayProps={{ backgroundOpacity: 0.2 }}
        title="Drawer title"
        opened={opened}
        position="right"
        onClose={close}
        closeButtonProps={{ icon: <IconCancel />, "aria-label": "Close modal" }}
        classNames={{
          root: "filter-root",
          close: "filter-root__close",
          inner: "filter-root__inner",
          content: "filter-root__content",
        }}
      >
        <Flex direction="column" gap="lg">
          <Accordion defaultValue="Price range">
            <Accordion.Item key="price range" value="Price range">
              <Accordion.Control>Price Range</Accordion.Control>
              <Accordion.Panel>
                <RangeSlider
                  min={50}
                  max={500}
                  step={1}
                  value={value}
                  onChange={setValue}
                />

                <SimpleGrid cols={2} spacing="xl" className="mt-16">
                  <span>${value.min}</span>
                  <span style={{ textAlign: "right" }}>${value.max}</span>
                </SimpleGrid>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <NumberInput placeholder="Guests" min={1} max={6} clearable />
          <Select
            placeholder="Select Acommodation"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
        </Flex>
      </Drawer>
      <Flex align="center" gap="sm">
        Filter
        <ActionIcon
          onClick={open}
          variant="light"
          aria-label="Filter"
          size="lg"
        >
          <IconFilter style={{ width: "70%", height: "70%" }} />
        </ActionIcon>
      </Flex>
    </>
  );
};

export default FilterMobile;

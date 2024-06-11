"use client";
import { useState } from "react";
import {
  Select,
  Flex,
  NumberInput,
  Menu,
  Button,
  SimpleGrid,
} from "@mantine/core";
import { RangeSlider } from "@/components/common/slider";

const DropDown = () => {
  const [value, setValue] = useState({ min: 50, max: 500 });
  return (
    <Menu shadow="md" width={200} position="bottom-start">
      <Menu.Target>
        {/* change this later to look like input */}
        <Button>Price</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <div>
          <RangeSlider
            min={50}
            max={500}
            step={1}
            value={value}
            onChange={setValue}
          />
        </div>
        <SimpleGrid cols={2} spacing="xl" className="mt-16">
          <span>${value.min}</span>
          <span style={{ textAlign: "right" }}>${value.max}</span>
        </SimpleGrid>
      </Menu.Dropdown>
    </Menu>
  );
};

const FilterDesktop = () => {
  // const [value, setValue] = useState({ min: 50, max: 500 });
  return (
    <Flex align="center" gap="md">
      <Select
        placeholder="Select Acommodation"
        data={["React", "Angular", "Vue", "Svelte"]}
        clearable="true"
      />
      <NumberInput placeholder="Guests" min={1} max={6} clearable="true" />
      <DropDown />
    </Flex>
  );
};

export default FilterDesktop;

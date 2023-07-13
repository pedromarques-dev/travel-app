import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { Label } from "../Label";

export const Header: React.FC = () => (
  <Flex
    bgColor="#16413B"
    justifyContent="center"
    alignItems="center"
    color="#fff"
    w="100%"
    h={14}
  >
    <Label
      title="Travel Scheduling App"
      isHeader
      textProps={{
        paddingY: {
          base: 5,
          md: 0,
        },
        fontSize: {
          base: 16,
          md: 24,
        },
      }}
    />
    <CalendarIcon ml={2} />
  </Flex>
);

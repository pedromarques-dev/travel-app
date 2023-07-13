import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => (
  <Flex
    bgColor="rgba(240, 240, 240, .7)"
    direction="column"
    position="absolute"
    bottom={0}
    justifyContent="center"
    alignItems="center"
    color="#111"
    w="100%"
  >
    <Text py={3} fontSize={16} fontWeight="bold">
      Desenvolvido por Pedro Marques 🖥️
    </Text>
    <Link target="_blank" to="https://www.github.com/pedromarques-dev">
      <Text my={2} fontSize={12} fontWeight="bold">
        Github
      </Text>
    </Link>
    <Link target="_blank" to="https://www.linkedin.com/in/pedromarques-dev">
      <Text fontSize={12} fontWeight="bold">
        Linkedin
      </Text>
    </Link>
  </Flex>
);

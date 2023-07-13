import * as React from "react";
import { BoxProps, Flex } from "@chakra-ui/react";
import { Card } from "../Card";
import { IState } from "../../interfaces";
import { Footer } from "..";

const srcImage =
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

interface IProps {
  boxProps?: BoxProps;
  states: IState[];
}

export const Banner: React.FC<IProps> = (props) => {
  const { boxProps, states } = props;

  return (
    <Flex
      position="relative"
      w="100%"
      bgImage={srcImage}
      backgroundRepeat="no-repeat"
      bgSize="cover"
      backgroundPosition="center"
      minH="94vh"
      justifyContent="center"
      alignItems="center"
      {...boxProps}
    >
      <Card states={states} />
      <Footer />
    </Flex>
  );
};

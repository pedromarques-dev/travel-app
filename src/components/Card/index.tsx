import React from "react";
import { Flex } from "@chakra-ui/react";
import { TravelForm } from "../TravelForm";
import { IState } from "../../interfaces";
import { Label } from "../Label";

interface IProps {
  states: IState[];
}

export const Card: React.FC<IProps> = (props) => {
  const { states } = props;

  return (
    <Flex
      w={{
        base: "100%",
        md: "70%",
      }}
      flexDir="column"
      bgColor="rgba(255, 255, 255, .9)"
      color="#111"
      borderWidth={2}
      borderRadius={20}
      mb={100}
    >
      <Label
        title="Faça o seu Check-in"
        isHeader
        textProps={{
          margin: "5px auto",
        }}
      />
      <TravelForm states={states} />
    </Flex>
  );
};

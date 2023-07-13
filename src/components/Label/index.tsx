import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

interface IProps {
  title: string;
  textProps?: TextProps;
  isHeader?: boolean;
}

export const Label: React.FC<IProps> = (props) => {
  const { title, textProps, isHeader } = props;

  return (
    <Text
      textAlign={{
        base: "center",
        xl: "left",
      }}
      fontSize={isHeader ? 24 : 14}
      py={2}
      fontWeight="bold"
      {...textProps}
    >
      {title}
    </Text>
  );
};

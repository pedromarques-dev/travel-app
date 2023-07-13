import { Input } from "@chakra-ui/react";
import moment from "moment";
import React from "react";

interface IProps {
  departureDate?: Date | null;
  selectedDate: Date | null;
  isBackDate?: boolean;
}

export const InputDate: React.FC<IProps> = (props) => {
  const { departureDate, selectedDate, isBackDate } = props;

  return (
    <Input
      w={{
        base: "100%",
        md: 250,
        xl: "100%",
      }}
      value={
        departureDate
          ? moment(departureDate).format("DD/MM/yyyy")
          : moment(selectedDate).format("DD/MM/yyyy")
      }
      letterSpacing="2px"
      bgColor="#fff"
      cursor={isBackDate === false ? "not-allowed" : "pointer"}
      opacity={isBackDate === false ? 0.5 : 1}
    />
  );
};

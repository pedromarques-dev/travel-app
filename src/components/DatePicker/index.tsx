import * as React from "react";
import { Box, BoxProps, Flex, InputGroup, Tooltip } from "@chakra-ui/react";
import RDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale";
import { Label } from "../Label";
import { InputDate } from "../InputDate";

interface IProps {
  boxProps?: BoxProps;
  label: string;
  departureDate?: Date | null;
  onChangeDate?: (date: Date | null) => void;
  isBackDate?: boolean;
}

export const DatePicker: React.FC<IProps> = (props) => {
  const { boxProps, label, departureDate, onChangeDate, isBackDate } = props;

  const [selectedDate, setDateChange] = React.useState<Date | null>(new Date());

  return (
    <Box
      {...boxProps}
      px={0}
      ml={{
        base: 0,
        xl: 10,
      }}
      textAlign={{
        base: "center",
        xl: "left",
      }}
    >
      <Label title={label} />
      <RDatePicker
        onChange={(date) => {
          setDateChange(date);
          if (onChangeDate) {
            onChangeDate(date);
          }
        }}
        locale={ptBR}
        disabled={isBackDate === false}
        dateFormat="dd/MM/yyyy"
        minDate={departureDate || new Date()}
        customInput={
          <InputGroup>
            <Flex alignItems="center" justifyContent="center">
              <Tooltip
                label={
                  isBackDate === false && "Selecione primeiro a data de ida"
                }
              >
                <InputDate
                  departureDate={departureDate}
                  isBackDate={isBackDate}
                  selectedDate={selectedDate}
                />
              </Tooltip>
            </Flex>
          </InputGroup>
        }
      />
    </Box>
  );
};

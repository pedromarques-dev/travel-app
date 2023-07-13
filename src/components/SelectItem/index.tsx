import React from "react";
import { IState } from "../../interfaces";
import { Select } from "@chakra-ui/react";

interface IProps {
  value: string;
  states: IState[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectItem: React.FC<IProps> = (props) => {
  const { value, states, onChange } = props;

  return (
    <Select
      bgColor="#fff"
      w={{
        base: "100%",
        md: 250,
        xl: "100%",
      }}
      value={value}
      onChange={onChange}
      isRequired
      pb={2}
    >
      <option value="" />
      {states &&
        states.map((state: IState, index: number) => (
          <option key={state.id + index} value={state.nome}>
            {state.nome}
          </option>
        ))}
    </Select>
  );
};

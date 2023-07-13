import * as React from "react";
import {
  Input,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

interface IProps {
  count: number;
  addCount: () => void;
  decreasedCount: () => void;
  placeholder: string;
}

export const InputForm: React.FC<IProps> = (props) => {
  const { count, addCount, decreasedCount, placeholder } = props;

  return (
    <>
      <InputGroup>
        <InputLeftElement>
          <MinusIcon
            w={3}
            h={3}
            color="black"
            cursor="pointer"
            onClick={() => {
              if (count === 0) return;
              decreasedCount();
            }}
          />
        </InputLeftElement>
        <Input
          w={{
            base: "100%",
            md: 250,
            xl: "100%",
          }}
          textAlign="center"
          value={count}
          readOnly
          bgColor="#fff"
          cursor="pointer"
        />
        <InputRightElement>
          <AddIcon
            w={3}
            h={3}
            color="black"
            cursor="pointer"
            onClick={addCount}
          />
        </InputRightElement>
      </InputGroup>
      <Text fontSize={10} textAlign="center" color="gray.700">
        {placeholder}
      </Text>
    </>
  );
};

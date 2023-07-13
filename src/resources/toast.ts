import { createStandaloneToast } from "@chakra-ui/react";

export const onSuccess = (title: string, description: string) => {
  const { toast } = createStandaloneToast();

  toast({
    title,
    description,
    status: "success",
    duration: 6000,
    isClosable: true,
  });
};

export const onError = (title: string, description: string) => {
  const { toast } = createStandaloneToast();

  toast({
    title,
    description,
    status: "error",
    duration: 4000,
    isClosable: true,
  });
};

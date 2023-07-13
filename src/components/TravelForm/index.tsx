import * as React from "react";
import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { IState, ISchedule } from "../../interfaces";
import { DatePicker } from "..";
import { InputForm } from "../InputForm";
import { Label } from "../Label";
import { SelectItem } from "../SelectItem";
import { onError, onSuccess } from "../../resources/toast";

interface IProps {
  states: IState[];
}

export const TravelForm: React.FC<IProps> = (props) => {
  const { states } = props;

  const [schedule, setSchedule] = React.useState<ISchedule>({
    origin: "",
    destiny: "",
  });

  const [departureDate, setDepartureDate] = React.useState<Date | null>(
    new Date()
  );
  const [backDate, setBackDate] = React.useState<boolean>(false);

  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const [countAdults, setCountAdults] = React.useState<number>(0);
  const [countChildren, setCountChildren] = React.useState<number>(0);

  const handleChangeOrigin = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSchedule({
      origin: e.target.value,
      destiny: schedule.destiny,
    });
  };

  const handleChangeDestiny = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSchedule({
      origin: schedule.origin,
      destiny: e.target.value,
    });
  };

  const submit = () => {
    if (!schedule.origin || !schedule.destiny) {
      onError(
        "Houve um erro na localização.",
        "A sua viagem precisa ter uma origem e um destino!"
      );
      return;
    }

    if (countAdults === 0 && countChildren === 0) {
      onError(
        "Houve um erro na contagem de passageiros.",
        "Precisamos que haja ao menos 1 passageiro!"
      );
      return;
    }

    if (!username || !email) {
      onError(
        "Houve um erro no cadastro dos seus dados pessoais.",
        "Precisamos que preencha o campo de nome o de email!"
      );
      return;
    }

    onSuccess("Viagem agendada com sucesso.", "Obrigado pela confiança!");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <FormControl>
      <Flex
        py={5}
        px={{
          base: 0,
          xl: 16,
        }}
        direction={{
          base: "column",
          xl: "row",
        }}
        justifyContent="center"
        alignItems={{
          base: "center",
          xl: "flex-start",
        }}
      >
        <Box
          w={{
            base: 250,
            md: 250,
            xl: "25%",
          }}
        >
          <Label title="De onde você vai sair?" />
          <SelectItem
            value={schedule.origin}
            onChange={handleChangeOrigin}
            states={states}
          />
          <Label title="Para onde voce vai?" />
          <SelectItem
            value={schedule.destiny}
            onChange={handleChangeDestiny}
            states={states}
          />
        </Box>
        <Box
          w={{
            base: 250,
            md: 300,
            xl: "25%",
          }}
        >
          <DatePicker
            boxProps={{
              pb: 3,
            }}
            label="Ida"
            onChangeDate={(date) => {
              setDepartureDate(date);
              setBackDate(true);
            }}
          />
          <DatePicker
            boxProps={{
              mb: {
                base: 0,
                xl: 20,
              },
              pb: 5,
            }}
            departureDate={departureDate}
            isBackDate={backDate}
            onChangeDate={(date) => setDepartureDate(date)}
            label="Volta"
          />
        </Box>
        <Box
          ml={{
            base: 0,
            xl: 10,
          }}
          w={{
            base: 250,
            md: 250,
            xl: "25%",
          }}
        >
          <Label title="Passageiros:" />
          <Box
            mb={10}
            textAlign={{
              base: "center",
              xl: "left",
            }}
          >
            <InputForm
              count={countAdults}
              placeholder="Adultos (Maiores que 12 anos)"
              addCount={() => setCountAdults(countAdults + 1)}
              decreasedCount={() => setCountAdults(countAdults - 1)}
            />
          </Box>
          <Box mb={2}>
            <InputForm
              count={countChildren}
              placeholder="Crianças (Menores que 12 anos)"
              addCount={() => setCountChildren(countChildren + 1)}
              decreasedCount={() => setCountChildren(countChildren - 1)}
            />
          </Box>
        </Box>
        <Box
          ml={{
            base: 0,
            xl: 10,
          }}
          w={{
            base: 250,
            md: 300,
            xl: "25%",
          }}
        >
          <Box
            mb={6}
            textAlign={{
              base: "center",
              xl: "left",
            }}
          >
            <Label title="Nome do responsável:" />
            <Input
              w={{
                base: "100%",
                md: 250,
                xl: "100%",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              bgColor="#fff"
            />
          </Box>
          <Box
            mb={2}
            textAlign={{
              base: "center",
              xl: "left",
            }}
          >
            <Label title="Email do responsável:" />
            <Input
              w={{
                base: "100%",
                md: 250,
                xl: "100%",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bgColor="#fff"
            />
          </Box>
        </Box>
      </Flex>
      <Box textAlign="center">
        <Button
          onClick={submit}
          w={{
            base: "80%",
            sm: "40%",
            md: "30%",
          }}
          h={20}
          bgColor="#16413B"
          color="#fff"
          p={5}
          mb={12}
          borderRadius={10}
          fontSize={18}
          transition="all 0.5s"
          _hover={{
            bgColor: "#fff",
            color: "#16413B",
          }}
        >
          Agendar viagem
        </Button>
      </Box>
    </FormControl>
  );
};

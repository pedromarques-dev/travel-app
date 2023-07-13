import React from "react";
import { IState } from "../../interfaces";
import { getAllStates } from "../../resources/api";
import { Banner, Header } from "../../components";

export const Home: React.FC = () => {
  const [states, setStates] = React.useState<IState[]>([]);

  React.useEffect(() => {
    const fetchApi = async () => {
      const result = await getAllStates();
      setStates(result);
    };

    fetchApi();
  }, []);

  return (
    <>
      <Header />
      <Banner states={states} />
    </>
  );
};

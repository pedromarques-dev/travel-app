const url = "https://brasilapi.com.br/api/ibge/uf/v1";

export const getAllStates = async () => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

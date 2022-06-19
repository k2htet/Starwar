import axios from "axios";

export const fetchData = async (url, planetsPage, peoplePage) => {
  const currentUrl = `${url}/?page=${planetsPage ? planetsPage : peoplePage}`;

  const response = await axios.get(currentUrl);

  return response.data;
};

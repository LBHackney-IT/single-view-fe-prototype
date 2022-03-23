import axios from "axios";
import config from "./env.config";

export const SearchByResidentFunction = async (
  searchParams: string
): Promise<any> => {
  const response = await axios.get(
    `${config.PROTOTYPE_URL}/search?searchText=${searchParams}`
  );
  console.log(response.data.body);
  return response.data;
};

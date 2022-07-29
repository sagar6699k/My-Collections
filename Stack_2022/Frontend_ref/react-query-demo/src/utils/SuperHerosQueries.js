import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getSingleData = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const getAllData = () => {
  return axios.get(`http://localhost:4000/superheroes`);
};

//Query-hooks
export const useAllHeroData = () => {
  return useQuery(["all-superhero"], () => getAllData(), {
    cacheTime: 5000, //It means data from the cache will be garbage collected after 5sec
  });
};

export const useSingleHeroData = (heroId) => {
  return useQuery(["single-hero", heroId], () => getSingleData(heroId));
};

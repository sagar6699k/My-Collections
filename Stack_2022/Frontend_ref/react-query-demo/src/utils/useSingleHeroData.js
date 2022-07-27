import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const getSingleData = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSingleHeroData = (heroId) => {
    return useQuery(['single-hero', heroId], ()=> getSingleData(heroId))
}

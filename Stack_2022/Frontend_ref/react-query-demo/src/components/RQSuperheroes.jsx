import {
  useQuery,
} from "@tanstack/react-query";

import { axios } from "axios";

export const RQSuperheroes = () => {

  // const { isLoading, data } = useQuery('unique_key', () => {
  //   return axios.get('http://localhost:4000/superheroes')
  // })


  const { isLoading, data } = useQuery(["secret"], async () => {
    const { data } = await axios.get(
      "http://localhost:4000/superheroes"
    );
    return data;
  });

  console.log("rq-data", "-->", data);
  
  if (isLoading) {
    return (
      <h2>Loading..</h2>
    )
  }

  return (
    <div>
      <h3>I'm RQ-Superheroes Page, You can call see all the RQ-Superheroes below </h3>
      {
        data?.data.map((hero) => {
          return (
            <h4 key={hero.id}>
              {`Firstname is : ${hero.first_name} and Lastname is: ${hero.last_name}`}
            </h4>
          )
        })
      }
    </div>
  )
}

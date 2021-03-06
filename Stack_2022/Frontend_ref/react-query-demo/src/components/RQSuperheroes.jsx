import {
  useQuery,
} from "@tanstack/react-query";

const getData = () => (
  fetch('http://localhost:4000/superheroes').then(res =>
      res.json()
  )
)

export const RQSuperheroes = () => {

  const { isLoading,isFetching, error, data }  
  = useQuery(
    ['secret'],
    getData,
    {
      cacheTime:5000 //It means data from the cache will be garbage collected after 5sec
    }
    )

  console.log('isLoading-->',isLoading,'isFetching-->',isFetching); //Its just for Analysis
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
        data?.map((hero) => {
          return (
            <h4 key={hero.id}>
              {`Firstname is : ${hero.first_name} and Lastname is: ${hero.last_name}`}
            </h4>
          )
        })
      }
    </div>
  )

  if (error) {
    return (
      <h2>{error.message}</h2>
    )
  }
}

import axios from 'axios'
import { useEffect, useState } from 'react'
export const Superheroes = () => {

const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);
const [error, setError] = useState('');

useEffect(() => {
  axios.get('http://localhost:4000/superheroes')
  .then((res)=>{
    setData(res.data)
    setLoading(false)
  })
  .catch((error)=>{
    setError(error.message)
    setLoading(false)
  })
}, [])


if (isLoading) {
  <h2>Loading...</h2>
}

if (error) {
  <h2>{error}</h2>
}

  return (
    <div>
      <h3>I'm Superheroes Page, You can call see all the Superheroes below</h3>
      {
        data.map((hero)=>{
          return(
            <div key={hero.id}>
              {`Firstname is : ${hero.first_name} and Lastname is: ${hero.last_name}`}
            </div>
          )
        })
      }
    </div>
  )
}

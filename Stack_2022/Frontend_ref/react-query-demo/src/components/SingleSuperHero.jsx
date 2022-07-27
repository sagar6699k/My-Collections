import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSingleHeroData } from "../utils/useSingleHeroData";

export const SingleSuperHero = () => {
  const { heroId } = useParams();
  const { isLoading, error, data } = useSingleHeroData(heroId);
//   console.log("Single_Data-->", data);

  if (isLoading) {
    return <h2>Loading..</h2>;
  }

  return (
    <>
      <div>
        <h2>See your information Below.</h2>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            provident. <br />
            Your First Name is{" "}
            <strong>{data?.data.first_name}</strong> Lorem ipsum dolor sit amet
            With Last Name <strong>{data?.data.last_name}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

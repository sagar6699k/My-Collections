import {useContext} from "react";
import { AlbumConext } from "../Context/AlbumContext";
import "./homepage.css";

const Homepage = () => {
 
    const {Albums} = useContext(AlbumConext)

  return (
    <>
      <h1 className="head_title">Music Album</h1>
        <div className="Content_div">
        {
          !Albums?<h1>Loading</h1>: Albums.map((element)=>(
            <div className="album_div">
                <h6>{element.name }</h6>      
                <img src={element.songs[0].poster} alt="" className="poster" />
                  <div>
                      <p>{element.genre}</p>
                      <p>{element.year}</p>
                  </div>
                
            </div>
           
          ))
        }
        </div>
    </>
  );
};

export default Homepage;

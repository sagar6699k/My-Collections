import {useContext} from "react";
import { AlbumConext } from "../Context/AlbumContext";
import { Link } from "react-router-dom";
import "./homepage.css";
import Pagination from "./Pagination";

const Homepage = () => {
 
  const { Albums ,SearchData} = useContext(AlbumConext);

  return (
    <>
      <h1 className="head_title">Music Album</h1>
        <div className="Content_div">
        {
          SearchData ?
          <div className="album_div" key={SearchData._id}>
          <h6>{SearchData.name}</h6>  
          <Link to={`/album/${SearchData.name}`}>
          <img src={SearchData.poster} alt="" className="poster" />
          </Link>
              <div>
                  <p>{SearchData.genre}</p>
                  <p>{SearchData.year}</p>
              </div>
            
        </div>
        :
        
        !Albums?<h1>Loading</h1>
        :
          Albums.map((element) => (
            
            <div className="album_div" key={element._id}>
              <h6>{element.name}</h6>  
              <Link to={`/album/${element.name}`}>
              <img src={element.poster} alt="" className="poster" />
              </Link>
                  <div>
                      <p>{element.genre}</p>
                      <p>{element.year}</p>
                  </div>
                
            </div>
            
           
          ))
          
        }
      </div>
      
      <Pagination />
    </>
  );
};

export default Homepage;

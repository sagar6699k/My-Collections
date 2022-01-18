import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./songpage.css";
const SongsPage = () => {
    const [songList, setSongList] = useState(null);
    const { name } = useParams()
    
    useEffect(() => {
        getData();
       
    }, []);

    const getData = async () => {
        let res = await axios.get(
          `http://localhost:2021/albums/${name}`
        );
        let Data = res.data;
        let { songs } = Data.albums; 
        console.log(songs)
        setSongList(songs)
      };

    return (
        <div>
            <h1>You are Listening - <span className="title">{name}</span></h1>
           {
               !songList?<h1>Loading..</h1>: songList.map((element) => (
                   <div className="song_row">
                       <div className="song_data">
                        <img src={element.poster} alt="" className="song_img" />
                        <div className="song_info">
                            <span>{element.name}</span>
                            <span>{element.duration}</span>
                        </div>
                       </div>
                       <div className="play_icon">
                           <img src="https://img.icons8.com/flat-round/344/play--v1.png" alt="" />
                       </div>

                   </div>
            ))
           }
        </div>
    )
}

export default SongsPage

import { useState, useEffect, useContext } from "react";
import { AlbumConext } from "../Context/AlbumContext";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [text, setText] = useState("");
    const [Data, setData] = useState(null);
    const [SearchData, setSearchData] = useState(null);

    const {Albums,handleAlbum, token} = useContext(AlbumConext)

    useEffect(() => {
        getData();
       
      }, []);
    
      const getData = async () => {
        let res = await fetch(
          "http://localhost:2021/albums/"
        );
        let data = await res.json();
    
        console.log(data.albums);
        setData(data.albums)
        handleAlbum(data.albums);
      };
    

    const SearchAlbum = () => {
        // for (let i = 0; i < Data.length; i++) {
        //   if (Data[i].name === text) {
        //     console.log(Data[i]);
        //     setSearchData(Data[i]);
        //   }
        // }
    }
    
    const handleGenre = (e) => {
        if (e.target.value === "All") {
            handleAlbum(Data);
        }
        else {
            let res = Data.filter((element) => element.genre === e.target.value)
            handleAlbum(res);
        }
    }

    const handleYear = (e) => {
        if (e.target.value === "All") {
            handleAlbum(Data);
        }
        else {
            let res = Data.filter((element) => element.year === Number(e.target.value))
            handleAlbum(res);
        }
    }
      



    return (
        <>
            <div className="navbar_div">
        <div className="filter_div">
          <label>Select Genre</label>
          <select name="" id="genre_id" onChange={handleGenre}>
            <option selected value="Genre">All</option>
            <option value="Rock">Rock</option>
            <option value="jazz">jazz</option>
            <option value="Hip-hop">Hip-hop</option>
            <option value="Pop-music">Pop-music</option>
            <option value="Classical">Classical</option>
            <option value="Trance music">Trance music</option>
          </select>

          <label>Select Year</label>
          <select name="year" id="" onChange={handleYear}>
            <option selected value="Year">All</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2123</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
          
          </select>
        </div>

        <div className="search_div">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="search-input"
            placeholder="Search your favourite Album"
          />
          <button onClick={SearchAlbum} className="search-btn">
            Search
          </button>
        </div>

        <div className="login_div">
        <Link to="/login">
          <span>{token ? "Logout" : "Login"}</span>
        </Link>
        
          <span>Profile</span>
        </div>
      </div>
        </>
    )
}

export default Navbar

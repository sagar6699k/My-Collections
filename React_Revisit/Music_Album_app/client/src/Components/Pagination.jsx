import { useState, useEffect, useContext } from "react";
import { AlbumConext } from "../Context/AlbumContext";
import axios from "axios";
import "./pagination.css";

const Pagination = () => {

    
    const { handleAlbum, handleCount,decCount,incCount, count ,TotalPage,setTotalPage} = useContext(AlbumConext)
    
    let res = [];
    for (let i = 1; i <= TotalPage; i++) {
        res.push(i);
    }
    
    useEffect(() => {
        getData();
        
    }, [count]);
    

    const getData = async () => {
    let res = await axios.get(
        `http://localhost:2021/albums/?page=${count}&size=3/`
    );
    let Data = res.data;
    setTotalPage(Data.total_pages)
    handleAlbum(Data.albums);
    };


    


    return (
        
        <>
            <div className="pages_btn">
                <button className="Prev_btn" onClick={decCount}>
                    <img src="https://img.icons8.com/ios-filled/344/chevron-left.png" alt="" className="btn_icon" />
                </button>
            {
                res.map((e) => (
                    <button key={e} style={{ backgroundColor: count == e ? "blue" : "" }} id="mybutton" value={e} onClick={handleCount}>{e}</button>
               ))
            }

                <button className="Next_btn" onClick={incCount}>
                    <img src="https://img.icons8.com/ios-filled/344/chevron-right.png" alt="" className="btn_icon" />
                </button>
            </div>
        </>
    )
}

export default Pagination

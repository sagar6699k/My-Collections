import { createContext, useState } from "react"

export const AlbumConext = createContext();

const AlbumConextProvider = ({children}) => {

    const [Albums, setAlbums] = useState(null);
    const [count, setcount] = useState(1)
    const [token, setToken] = useState("")
    const [SearchData, setSearchData] = useState(null);
    const [TotalPage, setTotalPage] = useState(4)

    const handleCount = (e) => {
        setcount(e.target.value)
    }

    const decCount = () => {
        if (count > 1) {
            setcount(p=>p-1)
        }
        else {
            setcount(1)
        }
    }
    const incCount = () => {
        if (count < TotalPage) {
            setcount(p=>p+1)
        }
        else {
            setcount(1)
        }
    }




    const handleAlbum = (album) => {
        setAlbums(album)
    }

    const handleFilterAlbum = (album) => {
        setSearchData(album)
    }

    const handleToken = (newToken) => {
        setToken(newToken)
    }

    // console.log("Albums:",Albums);
    // console.log("SearchData:",SearchData);

    const value = {Albums,token,SearchData,count,TotalPage,setTotalPage,handleCount,decCount,incCount, handleAlbum,handleToken,handleFilterAlbum}
    return (
        <AlbumConext.Provider value={value}>
            {children}
        </AlbumConext.Provider>
    )
}

export default AlbumConextProvider

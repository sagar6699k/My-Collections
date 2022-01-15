import { createContext, useState } from "react"

export const AlbumConext = createContext();

const AlbumConextProvider = ({children}) => {

    const [Albums, setAlbums] = useState(null);
    const [filterAlbum, setFilterAlbum] = useState(null);
    const [token, setToken] = useState("")

    const handleAlbum = (album) => {
        setAlbums(album)
    }
    const handleFilterAlbum = (album) => {
        setFilterAlbum(album)
    }

    const handleToken = (newToken) => {
        setToken(newToken)
    }

    console.log("Albums:",Albums);

    const value = {Albums,token,filterAlbum, handleAlbum,handleToken,handleFilterAlbum}
    return (
        <AlbumConext.Provider value={value}>
            {children}
        </AlbumConext.Provider>
    )
}

export default AlbumConextProvider

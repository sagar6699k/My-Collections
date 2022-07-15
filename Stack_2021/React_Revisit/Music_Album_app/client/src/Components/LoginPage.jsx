import { useState } from "react"
import axios from "axios"
import {useContext} from "react";
import { AlbumConext } from "../Context/AlbumContext";
import { useHistory } from "react-router-dom"

const LoginPage = () => {

    const {token, handleToken} = useContext(AlbumConext)
    const history = useHistory();

    const [artist, setArtist] = useState({
        email: String,
        password: String
    })

    const handleChange = (e) => {
        
        const { name, value } = e.target
        setArtist({
            ...artist,
            [name] : value
        })

    }



    const Login = () => {
        const { email, password } = artist;
        console.log(artist);
        if (email, password) {
            axios.post("http://localhost:2021/login", artist)
            .then(res=>  handleToken(res.data.token) )

            if (token) {
                history.push("/")
            }
        } else {
            alert("Invalid")
        }

       
    }

    




    return (
        <>
            <div className="login_form">

                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com"
                         name="email"  value={artist.email} onChange={handleChange}
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password"
                        name="password"  value={artist.password} onChange={handleChange}
                        />
                    </div>
                </div>

                <button type="submit" onClick={Login} class="btn btn-primary">
                    Submit
                </button>


            </div>
        </>
    )
}

export default LoginPage

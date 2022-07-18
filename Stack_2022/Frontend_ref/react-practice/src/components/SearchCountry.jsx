import { useEffect, useState } from "react"


const SearchCountry = () => {


    const [text, setText] = useState("")
    const [Data, setData] = useState(null);
    const [SearchData, setSearchData] = useState(null);

    useEffect(() => {
        getData();
        console.log(Data);
    }, [])


    const getData = async () => {
        let res = await fetch("https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json")
        let data = await res.json();

        console.log(data);
        setData(data);
    }

    const SearchCountry = () => {
        for (let i = 0; i < Data.length; i++) {
            if (Data[i].name === text) {
                console.log(Data[i]);
                setSearchData(Data[i])
            }
        }

    }





    return (
        <>
            <div className="search_div">
                <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} className="search-input" placeholder="Search a country name (First letter Capital)" />
                <button onClick={SearchCountry} className="search-btn">Search</button>
            </div>


            <div className="Conatent_div">
                {
                    SearchData ?
                        <div className="Country-list Searched_Country">
                            <img src={SearchData.flag} alt="Country Not Found" className="flag_img" />
                            <div className="name">
                                <h5 className="name">Country :{SearchData.name}</h5>
                                <h6 className="capital">Capital :{SearchData.capital}</h6>
                            </div>

                            <div className="region_div">
                                <p className="region">Region :{SearchData.region}</p>
                                <p className="population">Population :{SearchData.population}</p>
                            </div>

                        </div>

                        //   
                        :
                        !Data ? <h2>Loading..</h2>
                            : Data.map((element) => (
                                <div className="Country-list">
                                    <img src={element.flag} alt="" className="flag_img" />
                                    <div className="name">
                                        <h5 className="name">Country :{element.name}</h5>
                                        <h6 className="capital">Capital :{element.capital}</h6>
                                    </div>

                                    <div className="region_div">
                                        <p className="region">Region :{element.region}</p>
                                        <p className="population">Population :{element.population}</p>
                                    </div>

                                </div>
                            ))
                }
            </div>
        </>
    )
}

export default SearchCountry

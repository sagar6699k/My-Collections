import React, { useEffect, useState } from 'react';


const Countrybar = () => {

    const [Data, setData] = useState(null);
    const [text, setText] = useState(1960)

    useEffect(() => {
        getData();
    }, [text])


    const getData = async ()=>{
        let res = await fetch("https://codejudge-question-artifacts.s3.ap-south-1.amazonaws.com/poplution-countries-yearwise.json");
        let data = await res.json();
        let filtereddata = data.filter((element)=>{return element.Year == text}).slice(0,10).sort((a,b)=> b.Value - a.Value).sort();
        console.log(filtereddata);
        setData(filtereddata);
    }



    
    return (
        <div>
            <h1>Heelo</h1>
            
            <select onChange={(e)=>{setText(e.target.value)}} name="year" className='chart-select'>
                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1965">1965</option>
                <option value="1966">1966</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>
                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                
            </select>
            {
                !Data ?
                 <h2>Loading..</h2>
                 :
                 Data.map((element)=>(
                     <div className='rows'>
                         <h3>{element["Country Name"]}</h3>
                        <div></div>
                         <h4>{element.Value}</h4>
                     </div>
                 ))
            }
        </div>
    )
}

export default Countrybar

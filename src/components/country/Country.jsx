/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Country.css"

const Country = ({country, handleVisitedCountry}) => {
    const [visited, setVisited] = useState(false)

    const handleVisited =()=>{
       setVisited(!visited)
    }

    const {name, flags,population, area, cca3 } = country;
    return (
       
        <div className={`country ${visited && 'visited'}`}>
            <p style={{fontWeight:"bold", fontSize:'20px', color:visited?'Green':'Black'}}>Country Name: {name?.common}</p>
            <img src={flags.png} alt="Country Flag" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>{handleVisited();handleVisitedCountry(country)}}>{visited?'Visited':'Going'}</button>
            {visited? 'Yes, I have visited':'No, I want go there'}
        </div>
       
    );
};

export default Country;
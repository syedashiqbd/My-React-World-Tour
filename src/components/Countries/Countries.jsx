import { useState } from 'react';
import './Countries.css'
import { useEffect } from 'react';
import Country from '../country/Country';
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=> setCountries(data))
    },[])

    const handleVisitedCountry = (country) =>{
       
            const newVisitedCountry = [...visitedCountry, country]
            setVisitedCountry(newVisitedCountry)
        
    }

    return (
          <div className='container '>
             <h2>Countries: {countries.length}</h2>
             <h3>Visited Country List: {visitedCountry.length} </h3>
                <ol>
                    {
                        visitedCountry.map(country=><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ol>
            
                <div className='country_container'>
                {
                    countries.map(country=> <Country 
                        key={country.cca3} 
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }

                </div>
          </div>
    );
};

export default Countries;
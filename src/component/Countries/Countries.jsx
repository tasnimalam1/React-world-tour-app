import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country =>{
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    //Remove item from an array in a stat
    /**
     * use filter to select all the elements except the one you want to remove
     */

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            {/* visited country */}
            <div>
                <h2>Visited Countries: {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                    {
                        visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
                    }
            </div>
            {/* display country */}
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags = {handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
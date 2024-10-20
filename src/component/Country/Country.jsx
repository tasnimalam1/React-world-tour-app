import { useState } from 'react';
import './Country.css';

const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags, population, area, cca3
    } = country

    const [visited,setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithPrams = () => handleVisitedCountry(country)

    return (
        <div className={`country ${visited && 'visited'}`} >
            <h3 style={{color: visited? 'red':'black'}}>Name: {name.common}</h3>
            <img className='img' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button className={`btn ${visited && 'btn-visited'}`} onClick={handleVisited}>{visited ? 'Visited': 'Visit'}</button>
            {visited? 'I have visited this Country.': 'I want to visit this country.'}
            <button onClick={() => handleVisitedCountry(country)}>Mark As Visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
        </div>
    );
};

export default Country; 
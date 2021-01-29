import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import Summary from './Summary';
import CountriesList from './CountriesList';
import Loading from './Loading';

const Details = () =>
{
    const [countries, setCountries] = useState([]);
    const [global, setGlobal] = useState([]);
    const [currentDate, setDate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchItems = async () => {
            const result = await axios(`https://api.covid19api.com/summary`);
            
            setCountries(result.data.Countries);
            setGlobal(result.data.Global);
            setDate(result.data.Date);
            setLoading(false);
          }
          fetchItems();
    });

    return(
        loading?<Loading />:<div className='content'>
        <Header />
        <Summary summary={global} currentDate={currentDate} />
        <CountriesList countries={countries} />
    </div>
    )
}


export default Details;
import Countries from './Countries';

const CountriesList = ({countries}) =>
{
    console.log(countries);
    var countriesSorted = countries.sort((a, b)=>(a.TotalConfirmed>b.TotalConfirmed?-1:1));
    return (
        <div class='table1'>
        <table class='table table-bordered'>
            <thead>
                <tr>
                    <th>COUNTRY</th>
                    <th>CONFIRMED</th>
                    <th>ACTIVE CASES</th>
                    <th>RECOVERED</th>
                    <th>DECEASED</th>
                </tr>
            </thead>
            <tbody>
                {countriesSorted.map((country) => (
                    <Countries countries={country} key={country.Country} />
                ))}
                
            </tbody>
        </table>
        </div>
    );
}

export default CountriesList;
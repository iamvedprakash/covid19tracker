
const Countries = ({countries}) =>
{
    return(
        <tr>
            <td>{countries.Country}</td>
            <td>{countries.TotalConfirmed}</td>
            <td>{countries.TotalConfirmed-countries.TotalRecovered-countries.TotalDeaths}</td>
            <td>{countries.TotalRecovered}</td>
            <td>{countries.TotalDeaths}</td>
        </tr>
    );
}

export default Countries;
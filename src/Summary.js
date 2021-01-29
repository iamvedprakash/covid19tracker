const Summary = ({summary}) =>
{
    return(
        <div className="row">
            <div className='TotalConfirmed'>
                <h4>TOTAL CONFIRMED</h4>
                <h3>{summary.TotalConfirmed}</h3>
            </div>
            <div className='TotalActive'>
                <h4>TOTAL ACTIVE</h4>
                <h3>{summary.TotalConfirmed-summary.TotalRecovered-summary.TotalDeaths}</h3>
            </div>
            <div className='TotalRecovered'>
                <h4>TOTAL RECOVERED</h4>
                <h3>{summary.TotalRecovered}</h3>
            </div>
            <div className='TotalDeaths'>
                <h4>TOTAL DECEASED</h4>
                <h3>{summary.TotalDeaths}</h3>
            </div>
        </div>
    );
}
export default Summary;
import {useState} from "react"
import {Link} from "react-router-dom"

function CountriesList({countries}) {
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <div className="list-group">
          {countries.map(country => {
            return (
              <Link key={country.alpha3Code} className="list-group-item list-group-item-action" to={`/countryDetails/${country.alpha3Code}`}>
              <img style={{width: "20px"}} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag icon"/>
              {country.name.common}
              </Link>
            )          
          })}
           </div>
        </div>
    )
}

export default CountriesList
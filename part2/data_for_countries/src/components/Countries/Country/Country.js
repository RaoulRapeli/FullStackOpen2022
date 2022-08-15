const Country = ({country}) => {
  
  return(
    <>
      {country.map(country=>
        <div key={country.alpha2Code}>
            <h2>{country.name}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>

            <h2>Languages</h2>
            <ul>
              {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>

            <div>
              <img src={country.flags.svg} alt="missing" width="10%" height="10%"/>
            </div>
        </div>
      )}
    </>
  )
}

export default Country
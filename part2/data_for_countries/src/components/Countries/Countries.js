const Countries = ({countries,handleShowPush}) => {

    return(
      <>
        {countries.map(country => 
            <div key={country.alpha2Code}>
                {country.name} 
                <button onClick={()=>handleShowPush(country.name)}>show</button>
            </div>
        )}
      </>
    )
}

export default Countries
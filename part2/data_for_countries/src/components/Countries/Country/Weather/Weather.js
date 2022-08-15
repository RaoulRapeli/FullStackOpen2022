const Weather = ({country,weather}) => {

    return(
      <>
        <h2>Weather in {country[0].capital}</h2>
        <div>temperature {(weather.main.temp-273.15).toFixed(2)} Celcius</div>
        <div>
            <img src={"http://openweathermap.org/img/wn/"+weather.weather[0].icon+"@2x.png"} alt='missing'/>
        </div>
        <div>wind {weather.wind.speed} m/s</div>
      </>
    )
}

export default Weather
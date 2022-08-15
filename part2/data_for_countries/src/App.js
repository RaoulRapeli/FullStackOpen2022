import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter/Filter.js'
import Countries from './components/Countries/Countries.js'
import Country from './components/Countries/Country/Country.js'
import Weather from './components/Countries/Country/Weather/Weather.js'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState([])
  const [weather, setWeather] = useState([])
  const [filter, setFilter] = useState('')
  const [showCountries, setShowCountries]= useState(false)
  const [showCountry,setShowCountry]=useState(false)

  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {

    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {

        setAllCountries(response.data)
      })
  },[])

  useEffect(() => {

    if(country.length===1)
    {
      axios
        .get('https://api.openweathermap.org/data/2.5/weather?q='+country[0].capital+'&appid='+api_key)
        .then(response => {

          setWeather(response.data)
          setShowCountry(true)
        })
    }
    
  },[country])

  const handlesFilterChange = (event) => {
    
    setFilter(event.target.value)
    
    const tempcountries = allCountries
    .filter(country => country.name.toUpperCase().includes(event.target.value.toUpperCase()))
    .map(country => country)

    setCountries(tempcountries)
    if(tempcountries.length<=10)
      setShowCountries(true)
    else
      setShowCountries(false)

    if(tempcountries.length===1){
      setCountry(tempcountries)
    }
    else
      setShowCountry(false)
  }

  const handleShowPush = (countryName) => {
    
    const tempcountries = allCountries
    .filter(country => country.name.toUpperCase().includes(countryName.toUpperCase()))
    .map(country => country)

    if(tempcountries.length===1){
      setCountry(tempcountries)
    }
    else
      setShowCountry(false)
  }

  return (
    <div>
      <Filter {...{filter,handlesFilterChange}} />
      {showCountries===true&&showCountry===false?
        <Countries {...{countries,handleShowPush}}/>
        :
        <>
          {showCountry===false?<div>To many matches, specify another filter</div>:null}
        </>
      }
      {showCountry?
        <>
          <Country {...{country}}/>
          <Weather {...{country,weather}}/>
        </>
        :
        null
      }
      
    </div>
  )
}

export default App
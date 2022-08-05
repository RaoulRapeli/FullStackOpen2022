import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log("Raoul Rapeli")
  
  return (
    <div>
        <h1>give feedback</h1>
      <p>
        <Button setvalue={()=> setGood(good+1)} text="good"/>
        <Button setvalue={()=> setNeutral(neutral+1)} text="neutral"/>
        <Button setvalue={()=> setBad(bad+1)} text="bad"/>
      </p>
      <h1>Statistics</h1>
        {
          good>0 || neutral>0 || bad>0?
          <>
            <Statistics {...{good,neutral,bad}}/>
          </>
          :
          <p>No feedback given</p>
        }
        
    </div>
  )
}

const Button = ({text, setvalue}) =>{

    return <button onClick={setvalue}>{text}</button>
}

// a proper place to define a component
const Statistics = ({good,neutral,bad}) => {
  
  return(
    <table>
      <tbody>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <tr>
          <td>
            all 
          </td>
          <td>
            {good+neutral+bad}
          </td>
        </tr>
        <tr> 
          <td>
            average
          </td>
          <td>
            {(good+(neutral*0)+(bad*-1))/(good+neutral+bad)}
          </td>
        </tr>
        <tr> 
          <td>
            postive
          </td>
          <td>
            {(good/(good+neutral+bad))*100} %
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) =>{

  return(
    <tr> 
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}


export default App
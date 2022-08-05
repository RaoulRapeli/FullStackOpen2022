import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  console.log("Raoul Rapeli")
  const [points,setPoints] = useState([0,0,0,0,0,0,0])
   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <div>
        <button onClick={() => setPoints(Vote(points,selected))}>vote</button>
        <button onClick={() => setSelected(Nextanecdote())}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <Mostvotes {...{points, anecdotes}}/>
    </div>
  )
}

const Nextanecdote = () =>{
  return Math.floor(Math.random() * (6 - 0 + 1)) + 0
}

const Vote = (points, selected) =>{
  const copy = { ...points }
  copy[selected] += 1  
  return copy
}

const Mostvotes = ({points,anecdotes}) =>{

  const max = Math.max(...Object.values(points))
  const index = Object.values(points).indexOf(max)
  
  return (
    <div>
      <div>
        {anecdotes[index]}
      </div>
      <div>
        has {points[index]} votes
      </div>
    </div>
  )

}

export default App
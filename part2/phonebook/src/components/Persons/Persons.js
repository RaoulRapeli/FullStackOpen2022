const Persons = ({persons,filter,handleDelete}) => {

    return(
      <>
        {persons.filter(person => person.name.includes(filter)).map(person => <div key={person.id}>{person.name} {person.number} <button onClick={() => {if(window.confirm('Delete the item?')){handleDelete(person.id)}}}>delete</button></div>)}
      </>
    )
}

export default Persons
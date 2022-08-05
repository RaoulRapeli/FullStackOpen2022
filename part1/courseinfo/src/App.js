
function Header({course}){
    
    return(
      <div>
          <h1>{course.name}</h1>
      </div>
    );
}

function Content({course}){

  return(
    <div>
        <Part part={course.parts[0]} />
        <Part part={course.parts[1]} />
        <Part part={course.parts[2]} />
    </div>
  );


}

function Part({part}){
    return(
      <p>
        {part.name} {part.exercises}
      </p>
    );
}

function Total({course}){

  return(
    <p>Number of exercises {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}</p>
  );
  
}


const App = () => {
  console.log("Raoul Rapeli")
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header {...{course}} />
      <Content {...{course}}/>
      <Total {...{course}}/>
    </div>
  )
}

export default App
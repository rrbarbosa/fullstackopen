const App = () => {
  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const parts = [
    {'name': 'Fundamentals of React', 'num_exercises':10},
    {'name': 'Using props to pass data', 'num_exercises':7},
    {'name': 'State of a component', 'num_exercises':14},
  ];

  const Parts = (props) => {
    return (
      <>
        {props.parts.map(part => (
          <p key={part.name}> {part.name} {part.num_exercises}</p>
        ))}
      </>
    );
  };

  const Footer = (props) => {
    const total_exercises = props.parts.reduce((acc, val) => acc + val.num_exercises, 0)
    return (
      <p>
        Number of exercises {total_exercises}
      </p>
    )
  }

  return (
    <div>
      <Header course='Half Stack application development'/>
      <Parts parts={parts}/>
      <Footer parts={parts}/>
    </div>
  )
}

export default App

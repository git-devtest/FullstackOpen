const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <>
      <Header course = { course } />
      
      <Content part1 = { part1 } part2 = { part2 } part3 = { part3 } />

      <Total exercises1 = { part1.exercises } exercises2 = { part2.exercises } exercises3 = { part3.exercises } />
    </>
  );
};

const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  console.log(props);
  return (
    <>
      <p>
        {props.part1.name} {props.part1.exercises}
      </p>
      <p>
        {props.part2.name} {props.part2.exercises}
      </p>
      <p>
        {props.part3.name} {props.part3.exercises}
      </p>
    </>
  );
}

const Total = (props) => {
  console.log(props);
  return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>;
}

export default App;

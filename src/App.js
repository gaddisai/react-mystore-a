//we can use <div></div> or <></> to wrap the content
import './App.css';

function App(value) {
  return (
    <>
      <h1>Hello {value.name}! My age is {value.age}</h1>
    </>
  );
}

export{App};

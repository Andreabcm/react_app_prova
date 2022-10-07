import './App.css';

function App() {

  const functionWithParameters = (parameter) =>{
    console.log(`function llençada desde: ${ parameter }`)
  }

  return (
    <>
      <button onClick={ functionWithParameters }> On Click </button>
      <h1 onMouseOver={ functionWithParameters }> Mouse Over Event </h1>
    </>
  );
}

export default App;

import './App.css';

function sumar(){
  return 2+2
}

const nom = 'Alex'

const inLineStyle = {
  color: "#2ecc71",
  fotnSize: "26px",
}

function App() {
  return (
    <>
      <p style={ inLineStyle }> inLineStyle </p>
        <div className="red">
          <h2>Children</h2>
        </div>
        <h1 className="red"> Funcions { sumar() } </h1>
        <h1> Operacions matemàtiques { 3+2 } </h1>
        <h1> String { `Hola ${ nom }` }</h1>
        <h1> Lògica / Ternary { (3+2) >6 ? 'mayor' : 'menor' } </h1>
        <img src="" alt="" />
    </>
  );
}

export default App;

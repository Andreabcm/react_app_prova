import './App.css';
import Header from './components/Header.js';
import functionalComponent from './components/FunctionalComponent';


function App() {
  const propFunc1 = "variable";
  const propsFuncObject = {
    nom: "Alex",
    edat: 25
  } 

  return (
    <>
    <div className="bg-primary card">
      <Header/>
    </div>  
    <div>
      <functionalComponent 
        propsFunctional1 = {propFunc1}
        propsFunctional2String = "cadenaDeTexte1"
        propsFunctional3Number = {3}
        propFunctional4Object = {propsFuncObject}
      />
    </div>
    </>
  );
}

export default App;

import Contador from "./Componentes/contador/contador";
import CardsPelis from "./Componentes/peliculas/CardsPelis";


function App() {
  return (
    <>
      <div className="App">
        <h1>Actividad 1</h1>
        <Contador />
        <hr></hr>
        <h1>Actividad 2</h1>
        <CardsPelis />
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";

const gatosSRC = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg', 'cat5.jpg']
const gatosNombres = ['Antoneli', 'Jose Garcia', 'Luisito', 'Rosa', 'Desire']

function App() {

  const [counter, setCounter] = useState(0);
  const [imagenGato, setImagenGato] = useState('cat1.jpg');

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleChangeImg = ( gatoSeleccionado ) => {
    setImagenGato( gatoSeleccionado );
    setCounter( 0 );
  }

  return (
    <div>
      <div className="text-5xl text-center mt-6">Cat Clicker Premium</div>
      <div className="grid grid-cols-2 mx-8">
        <div className="col-span-1 text-center px-4 py-2 m-2 border-solid border-2 grid grid-cols-1">
          {gatosNombres.map((gato,i) =>
            <button
              key={gato}
              onClick={ () => handleChangeImg( gatosSRC[i] ) }
              className="bg-orange-500 hover:bg-orange-700 py-2 px-4 rounded mt-2 font-bold text-white">
              {gato}
            </button>
          )}
        </div>
        <div className="col-span-1 text-center px-4 py-2 m-2 border-solid border-2 block">
          <div className="my-3 text-2xl font-bold">Valoteli</div>
          <img onClick={handleAdd} src={ `./assets/images/${ imagenGato }` } alt="Gato" className="mx-auto h-64 rounded-lg animate__animated animate__fadeIn"></ img>
          <div className="my-3 text-xl">{counter}</div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Home.css';

function Home() {

  const navigate = useNavigate();

  const navigateToForm = () => {
    navigate('/form');
  };

  const [carSpaces , setCarSpaces]= useState([
    'A1', 'A2', 'A3',
    'B1', 'B2', 'B3',
    'C1', 'C2', 'C3', 'D1'
  ])

  function getFreeCard(id){ 
    return <div className="card">
      <div className="line-box">
          <div className="line short"></div>
          <div className="line long"></div>
      </div>
      <div key={id} className="title-box"><h1>{id}</h1></div>
      <div className="status-box free"><p>Livre</p></div>
    </div>
  } 

  function getBusyCard(id ,carSpace){ 
    carSpace = JSON.parse(carSpace)
    return (<div className="card busy">
      <div className="id"><p>{id}</p></div>
      <div className="info"><p>Bloco {carSpace.apartmentBloc}</p></div>
      <div className="info"><p>Número {carSpace.apartmentNumber}</p></div>
      <div className="info"><p>Placa {carSpace.carPlate}</p></div>
      <div className="info"><p>Modelo {carSpace.carModel}</p></div>
      <div className="info"><p>Cor {carSpace.carColor}</p></div>
      <div className="status"><p>Ocupado</p></div>
      <button value={id} onClick={e => removeData(e.target.value)}>LIMPAR</button>
    </div>)
  } 

  function removeData(id) {

    console.log('remove')
    localStorage.removeItem(id)
    setCarSpaces([
      'A1', 'A2', 'A3',
      'B1', 'B2', 'B3',
      'C1', 'C2', 'C3', 'D1'
    ])
  }

  return (
    <body>
      <div id="body">
        {carSpaces.map(id => {
          const carSpace = localStorage.getItem(id)
          let card;
          card = carSpace === null ? getFreeCard(id) : getBusyCard(id, carSpace)
          return card
        })}
      </div>
      <a>
        <button onClick={navigateToForm}>CADASTRAR</button>
      </a>
    </body>
  );
}

export default Home;

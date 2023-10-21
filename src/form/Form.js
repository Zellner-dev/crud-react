import { useNavigate } from 'react-router-dom';
import './Form.css';

function Forms() {
  const navigate = useNavigate();
  
  const navigateHome = () => {
    navigate('/');
  };

  let carSpace = "A1"
  let apartmentNumber
  let apartmentBloc
  let carPlate
  let carModel
  let carColor

  function validateForm() {
    console.log(carSpace)
    if(carSpace === '' || !carSpace){
        alert('Escolha uma vaga.')
    } else if(apartmentNumber === '' || !apartmentNumber) {
        alert('Insira o número do seu apartamento.')
        return;
    } else if(apartmentBloc === '' || !apartmentBloc) {
        alert('Insira o bloco do apartamento.')
        return;
    } else if(carPlate === '' || !carPlate) {
        alert('Insira a placa do seu carro.')
        return;
    } else if(carModel === '' || !carModel) {
        alert('Insira o modelo do seu carro.')
        return;
    } else if(carColor === '' || !carColor) {
        alert('Insira a cor do seu carro.')
        return;
    }

    const data = {
        isBusy : true,
        carPlate : carPlate,
        apartmentNumber : apartmentNumber,
        apartmentBloc : apartmentBloc,
        carModel : carModel,
        carColor : carColor,
    }
    saveData(carSpace, data)
  } 

  function saveData(id, data) {
    localStorage.setItem(id, objectToJson(data))
    navigateHome();
  }

  function objectToJson(json) {
    return JSON.stringify(json)
  }

  const handleCarSpace = event => {
    carSpace = event.target.value;
  };

  const handleapartmentNumber = event => {
    apartmentNumber = event.target.value
  }
  const handleapartmentBloc = event => {
    apartmentBloc = event.target.value
  }
  const handlecarPlate = event => {
    carPlate = event.target.value
  }
  const handlecarModel = event => {
    carModel = event.target.value
  }
  const handlecarColor = event => {
    carColor = event.target.value
  }

  return (
    <body>
      <div id="form-box">
        <select name="vagas" id="carSpace" onChange={handleCarSpace}>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="A3">A3</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="B3">B3</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="C3">C3</option>
            <option value="D1">D1</option>
        </select>
        <input id="apartmentNumber" type="text" placeholder="Número do apartamento" onChange={handleapartmentNumber}/>
        <input id="apartmentBloc" type="text" placeholder="Bloco do apartamento" onChange={handleapartmentBloc}/>
        <input id="carPlate" type="text" placeholder="Placo do carro" onChange={handlecarPlate}/>
        <input id="carModel" type="text" placeholder="Modelo do carro" onChange={handlecarModel}/>
        <input id="carColor" type="text" placeholder="Cor do carro" onChange={handlecarColor}/>
        <button onClick={validateForm}>SALVAR</button>
        <a id='exit' href="/">
            <button>SAIR</button>
        </a>
    </div>
    </body>
  );
}

export default Forms;

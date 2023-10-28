import styled from "styled-components";
import { useState } from "react";


export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState(0);

  const [segundoValor, setSegundoValor] = useState(0);

  const [resultado, setResultado] = useState(0);

  const capturarPrimeiroValor = (item) => {
	  setPrimeiroValor(Number(item.target.value));
  };
  const CapturarSegundoValor = (item) => {
	  setSegundoValor(Number(item.target.value));
  };

  const Somar = () => {
	  setResultado(primeiroValor + segundoValor);
  };


  const Subtracao = () =>{
    setResultado(primeiroValor - segundoValor);
  }

  const Divisao = () =>{
    setResultado(primeiroValor / segundoValor);
  }

  const Multiplicacao = () =>{
    setResultado(primeiroValor * segundoValor);
  }

  const Limpar = () =>{
    setResultado("");
    setPrimeiroValor("");
    setSegundoValor("");
  }

  const Header = styled.header`
    border: solid black;
    background-color: pink;
    width: 99vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `;

  const Main = styled.main`
    width: 99vw;
    height: 76.4vh;
    border: solid black;
    display:flex;
    justify-content: center;
    background-color: pink;
  `;

  const H1 = styled.h1`
    border: solid black;
    width: 50vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
  `;

  const H2 = styled.h2`
    color:purple;
  `;

  const Button = styled.button`
    width: 50vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    cursor: pointer;

    &:hover{
      background-color: blue;
      color: white;
    }
  `;

  const ButtonClear = styled.button`
    width: 50vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    cursor: pointer;
    color: red;

    &:hover{
      background-color: red;
      color: black;
    }
  `;

  const Input = styled.input`
    width:15vw;
    height:4vh;
    background-color: lightblue;
    color: black;
  `

	return (
		<div>
      <Header>
        <H1>Calculadora</H1>
        <H1>Resultado: {resultado}</H1>
      </Header>

      {/* <h2>Digite os números que deseja calcular aqui:</h2>
			<input type="number" value={primeiroValor} onChange={capturarPrimeiroValor} />
			<input type="number" value={segundoValor} onChange={CapturarSegundoValor} /> */}

      <Main>  
        <section>
        <H2>Digite os números que deseja calcular aqui:</H2>
			  <Input type="number" value={primeiroValor} onChange={capturarPrimeiroValor} />
			  <Input type="number" value={segundoValor} onChange={CapturarSegundoValor} />
          <H2>Escolha uma das seguintes operações:</H2>
          <ButtonClear onClick={Limpar}>C</ButtonClear>
			    <Button onClick={Somar}>+</Button>
          <Button onClick={Subtracao}>-</Button>
          <Button onClick={Divisao}>/</Button>
          <Button onClick={Multiplicacao}>x</Button>
        </section>
      </Main>
    
		</div>
	);
}
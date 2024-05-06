import React, { useState } from 'react';
import './contato.css';

const Contato = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    setEnviado(true);
  }
 

  return (
    <div className="formulario-box">
      <form onSubmit={handleSubmit} className="formulario">
          <p className='Questão01'>Quem você deseja contactar?</p>
          <div className="input-group">
            <input className='Ryanviado' type="text" name="nome" placeholder="Digite o seu nome" />
          </div>
          <div className="input-group">
            <input className='Ryanviado' type="number" name="numPessoas" placeholder="Quantidade de pessoas" />
          </div>
          <div className="input-group">
            <input className='Ryanviado' type="email" name="email" placeholder="Digite o seu email" />
          </div>
          <div className="input-group">
            <label className='data' htmlFor="dtaNascimento">Data que você quer ver a pessoa</label>
            <input className='Ryanviado' type="date" id="dtaNascimento" name="dtaNascimento" />
          </div>
          <p className='Questão01'>Complete a frase: "Filho de porr#, porrinh# ___"</p>
          <div className="check-grupobox">
            <input type="checkbox" id="fixacao" name="frase" value="é" />
            <label className='check-texto' htmlFor="fixacao">é</label>
          </div>
          <div className="check-grupobox">
            <input type="checkbox" id="projecao" name="frase" value="tem" />
            <label className='check-texto' htmlFor="projecao">Jamais será porrinh#</label>
          </div>
          <div className="check-grupobox">
            <input type="checkbox" id="cheiro" name="frase" value="verde" />
            <label className='check-texto' htmlFor="cheiro">Alienígena</label>
          </div>
          <div className="check-grupobox">
            <input type="checkbox" id="cor" name="frase" value="bonito" />
            <label className='check-texto' htmlFor="cor">Bonito</label>
          </div>
          <p className='Questão01'>Dê uma nota para seu professor:</p>
          <div className="input-range">
            <label className='range-texto'>O professor é top?</label>
            <input type="range" min="1" max="100" defaultValue="50" className="SatisfacaoGeral" id="SatisfacaoGeral" />
          </div>
      </form>

      {enviado && <p>Formulário enviado com sucesso!</p>}
    </div>
  );
}

export default Contato;
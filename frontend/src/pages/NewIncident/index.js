import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  async function addIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data);

      alert('caso adicionado');

      history.push('/profile');
    } catch (error) {
      alert(`Erro ao adicionar caso`);
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso:</h1>
          <p>Descreva o caso delhalhadamente para encontrar um herói para resolver isso.</p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para home
          </Link>
        </section>
        <form onSubmit={addIncident}>
          <input
            placeholder="Titulo do caso"
            value={title}
            required
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="descrição"
            value={description}
            required
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor em reais"
            value={value}
            required
            onChange={e => setValue(e.target.value)}
          />
          
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

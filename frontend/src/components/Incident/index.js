import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Incidents({incident, remove}) {

  async function deleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`);

      remove(id);
    } catch (error) {
      alert('erro ao deletar tente novamente');
    }
  }

  function formatReal(value) {
    return Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }
  return (
    <li>
      <strong>CASOS:</strong>
      <p>{incident.title}</p>

      <strong>DESCRIÇÃO:</strong>
      <p>{incident.description}</p>

      <strong>VALOR:</strong>
      <p>{formatReal(incident.value)}</p>

      <button type="button" onClick={() => deleteIncident(incident.id)}>
        <FiTrash2 size={20} color="#a8a8b3"/>
      </button>
    </li>
  );
}

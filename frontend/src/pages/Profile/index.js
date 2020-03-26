import React, { useEffect, useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import api from '../../services/api';
import Auth from '../../services/auth';

import Incident from '../../components/Incident';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const [name, setName] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const data = Auth.getOng();
    setName(data.name);
  }, []);

  useEffect(() => {
    api.get('profile').then(response => {
      setIncidents(response.data);
    });

  }, []);

  function removeIncident(id) {
    setIncidents(incidents.filter(incident => incident.id !== id));
  }

  function logout() {
    Auth.logout();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero"/>
        <span>Bem vinda, {name}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={e => logout()}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados:</h1>

      <ul>
        {incidents.map(incident => (
          <Incident
            key={incident.id}
            incident={incident}
            remove={removeIncident}
          />
        ))}
      </ul>
    </div>
  );
}

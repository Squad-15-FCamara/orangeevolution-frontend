import api from '../../services/api';
import { useEffect, useState } from 'react';

export function RoadQa() {
  const [roadQa, setRoadQa] = useState([]);

  useEffect(() => {
    api
      .get('/courses/roads/qa')
      .then((response) => setRoadQa(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <div>
      <h1>Tela da trilha Qa</h1>
    </div>
  );
}

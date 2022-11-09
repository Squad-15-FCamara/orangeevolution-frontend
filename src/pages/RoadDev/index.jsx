import api from '../../services/api';
import { useEffect, useState } from 'react';

export function RoadDev() {
  const [roadDev, setRoadDev] = useState([]);

  useEffect(() => {
    api
      .get('/courses/roads/dev')
      .then((response) => setRoadDev(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <div>
      <h1>Tela da trilha dev</h1>
    </div>
  );
}

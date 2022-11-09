import api from '../../services/api';
import { useEffect, useState } from 'react';

export function RoadUx() {
  const [roadUx, setRoadUx] = useState([]);

  useEffect(() => {
    api
      .get('/courses/roads/ux')
      .then((response) => setRoadUx(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <div>
      <h1>Tela da trilha Ux</h1>
    </div>
  );
}

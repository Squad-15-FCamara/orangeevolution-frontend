import api from '../../services/api';
import { useEffect, useState } from 'react';

export function RoadSoft() {
  const [roadSoft, setRoadSoft] = useState([]);

  useEffect(() => {
    api
      .get('/courses/roads/soft')
      .then((response) => setRoadSoft(response.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <div>
      <h1>Tela da trilha Soft Skill</h1>
    </div>
  );
}

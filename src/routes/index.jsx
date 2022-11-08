import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../styles/GlobalStyles';

import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <AppRoutes />
    </BrowserRouter>
  );
}

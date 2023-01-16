import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouteBuild from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <RouteBuild />
    </BrowserRouter>
  </>
);

export default App;

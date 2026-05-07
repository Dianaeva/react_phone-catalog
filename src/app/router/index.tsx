import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { App } from '../../App';
import { HomePage } from '../../modules/HomePage';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route element={<App />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;

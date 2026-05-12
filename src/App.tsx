import { Outlet } from 'react-router';

import './App.scss';
import { Header } from './modules/shared/components/Header';

export const App = () => (
  <div className="App">
    <Header />
    <h1>Product Catalog</h1>
    <Outlet />
  </div>
);

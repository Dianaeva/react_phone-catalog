import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './app/store';
import AppRouter from './app/router';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
);

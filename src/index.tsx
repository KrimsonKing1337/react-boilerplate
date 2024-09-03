import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from 'store';

import { App } from './components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

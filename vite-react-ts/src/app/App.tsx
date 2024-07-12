import type { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/shared/store';

import { ReactRouterProvider } from './provider';

export const App = (): ReactElement => (
  // <Provider store={store}>
    <ReactRouterProvider />
  // </Provider>
);

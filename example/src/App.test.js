import React from 'react';
import ReactDOM from 'react-dom';
import { HeadProvider } from 'react-head';
import App from './App';

describe('<App />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <HeadProvider>
        <App />
      </HeadProvider>,
      div
    );
  });
});

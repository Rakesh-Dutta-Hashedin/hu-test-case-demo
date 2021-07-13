import App from './App';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ReactDom from 'react-dom';

describe('<App />', () => {
  it('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDom.render(<App />, div);
    ReactDom.unmountComponentAtNode(div);
  });
});


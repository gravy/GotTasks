import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

describe('App', () => {

  it('should properly run tests', () => {
    expect(1).toBe(1);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

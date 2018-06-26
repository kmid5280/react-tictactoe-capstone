import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './App';
import {shallow} from 'enzyme'

describe('<Provider />', () => { 
  it('renders without crashing', () => {
    shallow(<Provider />)
  })
});

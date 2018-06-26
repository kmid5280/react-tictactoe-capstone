import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import {shallow} from 'enzyme'

describe('<Login />', () => {
    it('should render without crashing', () => {
        shallow(<Login />)
    })

    /*it('should render the username field', () => {
        const wrapper = shallow(<Login />)
        expect(wrapper.hasClass('login-username')).toEqual(true)
    })*/

})
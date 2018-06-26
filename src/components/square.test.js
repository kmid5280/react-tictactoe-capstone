import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square';
import {shallow, mount} from 'enzyme'

describe('<Square />', () => {
    it('should render without crashing', () => {
        shallow(<Square/>)
    })
    it('should render an X when clicked on', () => {
        const wrapper = mount(<Square/>)
        wrapper.simulate('click')
        expect(wrapper.props.container).toEqual('X')
    })
})
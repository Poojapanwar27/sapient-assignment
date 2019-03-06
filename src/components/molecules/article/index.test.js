import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Article from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Article', () => {
  it('should render my component', () => {
    console.log(Article);
    const component = shallow(<Article data="" />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
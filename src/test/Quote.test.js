import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote'


it('renders correctly', () => {
  const docment = renderer
  .create(<Quote />).toJSON();
  expect(docment).toMatchSnapshot();
});
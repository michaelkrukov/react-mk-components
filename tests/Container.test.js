import React from 'react';
import { Container } from '../src';
import renderer from 'react-test-renderer';

test('Container renders', () => {
  const component = renderer.create(
    <Container>content</Container>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

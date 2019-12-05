import React from 'react';
import { Button } from '../src';
import renderer from 'react-test-renderer';

test('Button renders', () => {
  const component = renderer.create(
    <Button>button</Button>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders with color', () => {
  const component = renderer.create(
    <Button primary>button</Button>,
    <Button danger>button</Button>,
    <Button success>button</Button>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders as block', () => {
  const component = renderer.create(
    <Button block>button</Button>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

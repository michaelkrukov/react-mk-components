import React from 'react';
import { BodyEnd } from '../src';
import renderer from 'react-test-renderer';

jest.mock("react-dom", () => ({
  createPortal: (node) => node
}));

test('BodyEnd renders', () => {
  const component = renderer.create(
    <BodyEnd>button</BodyEnd>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

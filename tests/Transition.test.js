import React from 'react';
import { Transition } from '../src';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

test('Transition renders', () => {
  const component = renderer.create(
    <Transition>content</Transition>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

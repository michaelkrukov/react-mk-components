import React from 'react';
import { BodyEnd } from '../../src';

export default {
  title: 'BodyEnd',
};

export const showcase = () => (
  <div>
    <div>One</div>
    <BodyEnd>
      <div>This component is always placed at the end of {'<body>'}.</div>
    </BodyEnd>
    <div>Two</div>
    <BodyEnd>
      <div>This component is always placed at the end of {'<body>'}.</div>
    </BodyEnd>
    <div>Three</div>
  </div>
);

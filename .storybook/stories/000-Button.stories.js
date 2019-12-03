import React from 'react';
import { Button } from '../../dist';

export default {
  title: 'Button',
};

export const showcase = () => (
  <Button>Simple button</Button>
);

export const asBlock = () => (
  <Button block>Simple button</Button>
);

export const colored = () => (
  <>
    <Button primary>Primary button</Button><br/>
    <Button secondary>Secondary button</Button><br/>
    <Button success>Success button</Button><br/>
    <Button danger>Danger button</Button><br/>
    <Button info>Info button</Button><br/>
    <Button warning>Warning button</Button><br/>
    <Button dark>Dark button</Button><br/>
    <Button light>Light button</Button>
  </>
);

const Link = (props) => <a {...props} />

export const asLink = () => (
  <Button as={Link} href="https://pornhub.com" block danger>
    Don't click me (I'm link)
  </Button>
);

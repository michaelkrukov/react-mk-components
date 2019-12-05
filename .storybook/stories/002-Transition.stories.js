import React, { useState } from 'react';
import { Button, Transition } from '../../src';

export default {
  title: 'Transition',
};

const ToggleableContent = (props) => {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <Button block primary onClick={() => setHidden(!hidden)}>
        Toggle
      </Button>
      <div style={{padding: "1rem"}}>
        <Transition hidden={hidden} {...props}>
          Simple content in transition with
          props: <code>{JSON.stringify({...props, hidden})}</code>
        </Transition>
        {props.hideOnExit ? <hr /> : null}
      </div>
    </>
  );
};

export const simple = () => <ToggleableContent />;

export const noEnterAnimation = () => <ToggleableContent noEnter />;

export const noExitAnimation = () => <ToggleableContent noExit />;

export const noInitialEnterAnimation = () => <ToggleableContent noInitialEnter />;

export const hideOnEnter = () => <ToggleableContent hideOnExit />;

export const instant = () => <ToggleableContent instant />;

export const quick = () => <ToggleableContent quick />;

export const normal = () => <ToggleableContent />;

export const slow = () => <ToggleableContent slow />;

import React, { useState } from 'react';
import { Story } from '../utils';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
}
from '../../src';

export default {
  title: 'Modal',
};

const ModalComponent = (props) => {
  const [hidden, setHidden] = useState(true);

  const toggle = () => setHidden(!hidden);

  return (
    <div>
      <Button info block onClick={toggle}>Toggle</Button>
      <Modal hidden={hidden} toggle={toggle} {...props}>
        <div style={{padding: '1rem', textAlign: 'center'}}>
          Hello there!<br/>
          Hello there!<br/>
          Hello there!<br/>
          Hello there!<br/>
        </div>
      </Modal>
    </div>
  );
};

export const plain = Story(() => {
  const [hidden, setHidden] = useState(true);

  const toggle = () => setHidden(!hidden);

  return (
    <div>
      <Button block info onClick={toggle}>Toggle</Button>
      <Modal hidden={hidden} toggle={toggle}>
        <ModalHeader>
          Header
          <Button danger onClick={() => setHidden(!hidden)}>x</Button>
        </ModalHeader>
        <ModalBody>Modal body text goes here.</ModalBody>
        <ModalFooter>
          <Button danger onClick={() => setHidden(!hidden)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
});

export const long = Story(() => {
  const [hidden, setHidden] = useState(true);

  const toggle = () => setHidden(!hidden);

  return (
    <div>
      <Button block info onClick={toggle}>Toggle long body</Button>
      <Modal hidden={hidden} toggle={toggle}>
        <ModalBody>
          {Array(100).fill().map((_, i) => (
            <div key={i + 1}>{i + 1}</div>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button danger onClick={() => setHidden(!hidden)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
});

export const small = () => <ModalComponent noRadius small />;

export const large = () => <ModalComponent noRadius large />;

export const fullWidth = () => <ModalComponent noRadius fullWidth />;

export const top = () => <ModalComponent noRadius centered={false} />;

export const instant = () => <ModalComponent noRadius instant />;

export const quick = () => <ModalComponent noRadius quick />;

export const normal = () => <ModalComponent noRadius />;

export const slow = () => <ModalComponent noRadius slow />;

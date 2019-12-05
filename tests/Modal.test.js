import React from 'react';
import { Modal } from '../src';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';


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

test('Modal renders', () => {
  const component = renderer.create(
    <ModalComponent />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Modal changes hidden', () => {
  const wrapper = mount(<ModalComponent />);

  expect(wrapper.find(Modal).at(0).prop('hidden')).toEqual(true);

  wrapper.find('button').at(0).simulate('click');

  expect(wrapper.find(Modal).at(0).prop('hidden')).toEqual(false);
});

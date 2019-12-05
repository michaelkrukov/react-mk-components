import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import Transition from '../Transition';
import { usePrevious } from '../utils';
import style from './style.less';

const cx = classNames.bind(style);

const Modal = ({
  returnFocusAfterClose,
  hidden: hiddenProp,
  toggle,
  fullWidth,
  large,
  small,
  centered,
  noRadius,
  instant,
  quick,
  slow,
  children,
}) => {
  const [hiddenState, setHiddenState] = useState(hiddenProp);
  const prevHiddenState = usePrevious(hiddenState);
  const refModal = useRef(null);
  const refTransition = useRef(null);
  const refElementMouseDown = useRef(null);
  const refElementTriggeredOpened = useRef(null);

  const open = () => {
    if (!refModal.current) { return; }
    refModal.current.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    document.body.style.overflow = '';

    if (returnFocusAfterClose && refElementTriggeredOpened.current !== null) {
      refElementTriggeredOpened.current.focus();
      refElementTriggeredOpened.current = null;
    }
  };

  useEffect(() => {
    if (!hiddenState) { open(); }

    return () => {
      if (!hiddenState) {
        close();
      }
    };
  }, []);

  useEffect(() => {
    if (!hiddenProp) {
      refElementTriggeredOpened.current = document.activeElement;
    }
    setHiddenState(hiddenProp);
  }, [hiddenProp]);

  useEffect(() => {
    if (hiddenState && !prevHiddenState) {
      close();
    } else if (!hiddenState && prevHiddenState) {
      open();
    }
  }, [hiddenState]);

  const canToggle = () => {
    if (!refTransition.current) { return true; }
    const { opacity } = window.getComputedStyle(refTransition.current.base);
    return opacity <= 0.15 || opacity >= 0.85;
  };

  const handleBackdropClick = (e) => {
    if (e.target !== refElementMouseDown.current) { return; }
    e.stopPropagation();
    if (canToggle() && e.target === refModal.current) {
      toggle();
    }
  };

  const handleBackdropMouseDown = (e) => {
    refElementMouseDown.current = e.target;
  };

  return (
    <Transition
      hidden={hiddenState}
      instant={instant}
      quick={quick}
      slow={slow}
      ref={refTransition}
    >
      <div
        role="region"
        className={cx('ModalWrapper')}
        onMouseDown={handleBackdropMouseDown}
        onClick={handleBackdropClick}
        ref={refModal}
      >
        <div className={cx('ModalDialog', {
          large, small, centered, fullWidth,
        })}
        >
          <div className={cx('ModalContent', { 'no-radius': noRadius })}>
            {children}
          </div>
        </div>
      </div>
      <div className={cx('ModalBackdropComponent', { static: true })} />
    </Transition>
  );
};

Modal.defaultProps = {
  centered: true,
  quick: true,
};

export default Modal;

export const ModalHeader = ({ className, ...rest }) => (
  <div className={cx('ModalHeader', className)} {...rest} />
);

export const ModalBody = ({ className, ...rest }) => (
  <div className={cx('ModalBody', className)} {...rest} />
);

export const ModalFooter = ({ className, ...rest }) => (
  <div className={cx('ModalFooter', className)} {...rest} />
);

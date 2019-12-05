import React, { useEffect, useState, useRef, forwardRef } from 'react';
import classNames from 'classnames/bind';
import style from './style.less';

const cx = classNames.bind(style);

const ANIMATION_TIME = 400;

export const UNMOUNTED = 'unmounted';
export const ENTERING = 'entering';
export const ENTERED = 'entered';
export const EXITING = 'exiting';
export const EXITED = 'exited';

const Transition = forwardRef(({
  className,
  children,
  hidden,
  instant,
  quick,
  slow,
  noInitialEnter,
  noEnter,
  noExit,
  hideOnExit,
  ...rest
}, ref) => {
  const [status, setStatus] = useState(UNMOUNTED);
  const nextCallback = useRef(null);
  const initiallyVisible = useRef(!hidden);
  const transitionEl = useRef(ref || null);

  const forceUpdate = () => {
    // Force repaint for transitions to work
    // eslint-disable-next-line no-unused-expressions
    transitionEl.current && transitionEl.current.scrollTop;
  };

  const setNextCallback = (callback, delay) => {
    if (nextCallback.current) {
      nextCallback.current.cancel();
    }

    let active = true;
    nextCallback.current = () => {
      if (!active) { return; }
      active = false;
      nextCallback.current = null;
      if (callback) { callback(); }
    };
    nextCallback.current.cancel = () => {
      active = false;
    };

    setTimeout(nextCallback.current, delay);

    return nextCallback.current;
  };

  useEffect(() => {
    if (!initiallyVisible.current) {
      setStatus(EXITED);
    } else if (noInitialEnter) {
      setStatus(ENTERED);
    } else {
      forceUpdate();
      setStatus(ENTERING);
      setNextCallback(() => setStatus(ENTERED), ANIMATION_TIME);
    }

    return () => {
      /* Clean up callbacks if needed */
      if (nextCallback.current) {
        nextCallback.current.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (hidden) {
      if (status === ENTERING || status === ENTERED) {
        if (noExit) {
          setStatus(EXITED);
        } else {
          setStatus(EXITING);
          setNextCallback(() => setStatus(EXITED), ANIMATION_TIME);
        }
      }
    } else if (status === EXITING || status === EXITED) {
      if (noEnter) {
        setStatus(ENTERED);
      } else if (hideOnExit) {
        // If we were hidden (display: none), then we should first render
        // component with normal display.

        // This special case renders components without hidden, then renders
        // it with as visible, and after transition it will update status
        // to ENTERED.

        setStatus(UNMOUNTED);
        setNextCallback(() => {
          forceUpdate();
          setStatus(ENTERING);
          setNextCallback(() => setStatus(ENTERED), ANIMATION_TIME);
        }, 0);
      } else {
        setStatus(ENTERING);
        setNextCallback(() => setStatus(ENTERED), ANIMATION_TIME);
      }
    }
  }, [hidden]);

  let firstEnter = false;
  let firstExit = false;

  if (status === UNMOUNTED) {
    if (initiallyVisible.current && noInitialEnter) {
      firstEnter = true;
    } else {
      firstExit = true;
    }
  }

  const enter = (status === ENTERING || status === ENTERED);
  const exit = (status === EXITING || status === EXITED);
  const active = (
    (enter && status === ENTERING && !noEnter)
    || (exit && status === EXITING && !noExit)
  );

  const classes = {
    enter: enter || firstEnter,
    exit: exit || firstExit,
    active,
    hidden: status === EXITED && hideOnExit,

    instant,
    quick : quick && !instant,
    slow: slow && !quick && !instant,
  };

  return (
    <div className={cx(className, classes)} ref={transitionEl} {...rest}>
      {children}
    </div>
  );
});

Transition.defaultProps = {
  className: 'TransitionFade',
};

export default Transition;

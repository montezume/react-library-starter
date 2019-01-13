import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button onClick={props.onClick} type={props.type}>
    {props.children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,
};

Button.defaultProps = {
  type: 'button',
};

Button.displayName = 'Button';

export default Button;

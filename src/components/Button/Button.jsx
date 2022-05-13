import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ type, children, handleClick }) => {
  return (
    <S.Button type={type} onClick={handleClick}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;

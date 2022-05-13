import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ type, children }) => {
  return <S.Button type={type}>{children}</S.Button>;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Notification.style';

const Notification = ({ children, handleClose }) => {
  return (
    <S.Notification>
      {children}
      <S.Icon onClick={handleClose}>X</S.Icon>
    </S.Notification>
  );
};

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Notification;

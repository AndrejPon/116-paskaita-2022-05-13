import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Content.style';

const Content = ({ title, children }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <div>{children}</div>
    </S.Container>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Content;

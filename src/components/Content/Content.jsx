import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Content.style';

const Content = ({ title, content }) => {
  return (
    <S.Container title={title} content={content}>
      <S.Title>{title}</S.Title>
      <S.Text>{content}</S.Text>
    </S.Container>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Content;

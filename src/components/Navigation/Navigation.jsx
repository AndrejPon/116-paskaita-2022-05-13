import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';
import Logo from '../../assets/images/logo.svg';

const Navigation = ({ links }) => {
  return (
    <S.Header>
      <S.Container>
        <S.TopShelf>
          <S.Logo src={Logo} alt='VetBee' />
        </S.TopShelf>

        <S.Nav>
          {links &&
            links.map((link) => (
              <S.StyledLink key={link.title} to={link.link}>
                {link.title}
              </S.StyledLink>
            ))}
        </S.Nav>
      </S.Container>
    </S.Header>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;

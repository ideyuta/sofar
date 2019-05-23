import React from 'react';
import { withPrefix } from 'gatsby-link';
import styled from 'styled-components';
import { colors } from '../assets';

const Anchor = styled.a`
  display: inline-block;
  color: ${colors.gray900};
  font-size: 1rem;
  font-weight: 900;
  padding: 20px;
  text-decoration: none;
  :hover {
    color: ${colors.blue500};
  }
`;

export default function PostNav(props) {
  return <Anchor href={withPrefix('/')}>Sofar</Anchor>;
}

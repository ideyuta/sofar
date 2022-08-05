import React from 'react';
import { withPrefix } from 'gatsby-link';
import styled from 'styled-components';
import { colors } from '../assets';
import Spacer from './Spacer';

const Anchor = styled.a`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  height: 100%;
  padding: 32px 16px;
  text-decoration: none;
  width: 100%;
  &:hover {
    background: ${colors.gray50};
    text-decoration: none;
  }
`;
const AnchorRight = styled(Anchor)`
  align-items: flex-end;
`;
const AnchorWrapper = styled.div`
  background: ${colors.gray20};
  flex: 1;
`;
const Date = styled.span`
  color: ${colors.gray500};
  display: block;
  font-size: 0.75rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export default function PostNav(props) {
  return (
    <Wrapper>
      <AnchorWrapper>
        {props.prev && (
          <Anchor href={withPrefix(props.prev.frontmatter.path)}>
            {props.prev.frontmatter.title}
            <Spacer size="tiny" />
            <Date>{props.prev.frontmatter.date}</Date>
          </Anchor>
        )}
      </AnchorWrapper>
      <AnchorWrapper>
        {props.next && (
          <AnchorRight href={withPrefix(props.next.frontmatter.path)}>
            {props.next.frontmatter.title}
            <Spacer size="tiny" />
            <Date>{props.next.frontmatter.date}</Date>
          </AnchorRight>
        )}
      </AnchorWrapper>
    </Wrapper>
  );
}

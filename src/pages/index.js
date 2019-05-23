import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { withPrefix } from 'gatsby-link';
import { colors } from '../assets';
import Header from '../components/Header';

const Anchor = styled.a`
  font-size: 1rem;
`;
const Date = styled.span`
  color: ${colors.gray300};
  font-size: 0.75rem;
  padding-left: 8px;
`;
const List = styled.ul`
  line-height: 1.2em;
  padding-right: 8px;
`;

/**
 * Index Component
 */
export default function Index(props) {
  const pages = props.data.allFile.edges
    .map(edge => {
      const { date, path, title } = edge.node.childMarkdownRemark.frontmatter;
      return (
        <li key={path}>
          <Anchor href={withPrefix(path)}>{title}</Anchor>
          <Date>{date}</Date>
        </li>
      );
    })
    .reverse();
  return (
    <div>
      <Helmet>
        <title>Sofar</title>
        <meta
          content="感謝するぜ お前と出会えた これまでの 全てに!!!"
          name="description"
        />
      </Helmet>
      <Header />
      <List>{pages}</List>
    </div>
  );
}

export const pageQuery = graphql`
  {
    allFile(
      filter: { relativeDirectory: { eq: "posts" } }
      sort: { fields: [base], order: ASC }
    ) {
      edges {
        next {
          base
        }
        previous {
          base
        }
        node {
          base
          childMarkdownRemark {
            frontmatter {
              title
              date
              layout
              path
              description
            }
          }
        }
      }
    }
  }
`;

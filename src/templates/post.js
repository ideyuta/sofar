import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { colors } from '../assets';
import '../assets/post.css';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import PostNav from '../components/PostNav';

const Content = styled.div`
  padding: 20px;
  word-break: break-all;
`;
const Date = styled.p`
  color: ${colors.gray1000};
`;
const Title = styled.h2`
  color: ${colors.gray1000};
  font-size: 2.4rem;
  font-weight: 400;
  margin: 0;
`;

export default function Template({ data }) {
  const { frontmatter, html } = data.post;
  const currentPost = data.posts.edges.find(
    (p) => p.node.frontmatter.path === frontmatter.path
  );
  return (
    <div>
      <Helmet title={`${frontmatter.title} - Sofar`} />
      <Header />
      <Content>
        <Title>{frontmatter.title}</Title>
        <Date>{`Posted: ${frontmatter.date}`}</Date>
        <Spacer size="regular" />
        <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
      </Content>
      <PostNav next={currentPost.next} prev={currentPost.previous} />
    </div>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
    ) {
      edges {
        next {
          frontmatter {
            date
            path
            title
          }
        }
        previous {
          frontmatter {
            date
            path
            title
          }
        }
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`;

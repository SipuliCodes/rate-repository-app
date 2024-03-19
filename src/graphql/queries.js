import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          description
          forksCount
          language
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
          fullName
        }
      }
    }
  }
`

export const ME = gql`
  query {
    me {
      id
      username
    }
}
`
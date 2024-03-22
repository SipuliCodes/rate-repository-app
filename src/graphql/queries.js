import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
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

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!){
    repository(id: $id) {
      fullName
      url
      description
      forksCount
      ratingAverage
      reviewCount
      stargazersCount
      language
      ownerAvatarUrl
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
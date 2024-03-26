import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query getRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
      id
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

export const GET_REVIEWS = gql`
  query getReviews($id: ID!){
  repository(id: $id) {
    id
    fullName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`

export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            rating
            createdAt
            text
            user {
              username
            }
            repository {
              id
            }
          }
        }
      }
    }
  }
`
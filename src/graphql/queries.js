import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query getRepositories($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
    repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
      pageInfo {
          hasNextPage,
          endCursor
        }
    }
  }
  ${REPOSITORY_DETAILS}
`

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!){
    repository(id: $id) {
      ...RepositoryDetails
    }
  }
  ${REPOSITORY_DETAILS}
`

export const GET_REVIEWS = gql`
  query getReviews($id: ID!, $first: Int, $after: String){
  repository(id: $id) {
    id
    fullName
    reviews(first: $first, after: $after) {
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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
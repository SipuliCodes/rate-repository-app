import { gql } from "@apollo/client";

export const RepositoryTypeDefs = gql`
  type Repository {
    id: ID!
    description: String
    forksCount: Int
    language: String
    ownerAvatarUrl: String
    ratingAverage: Float
    reviewCount: Int
    stargazersCount: Int
    fullName: String
    url: String
  }`

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    description
    forksCount
    language
    ownerAvatarUrl
    ratingAverage
    reviewCount
    stargazersCount
    fullName
    url
  }
`
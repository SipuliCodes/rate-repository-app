import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ selectedOrder, searchKey }) => {
  const variables = {
    orderBy: selectedOrder === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE',
    orderDirection: selectedOrder === 'lowest' ? 'ASC' : 'DESC',
    searchKeyword: searchKey
  };

  console.log(variables);

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: variables
  });

  if (loading) {
    return {repositories: [], loading}
  }

  if (error) {
    throw new Error('Something went wrong while querying data' + error);
  }

  const repositories = data.repositories;

  return {repositories, loading}
};



export default useRepositories;
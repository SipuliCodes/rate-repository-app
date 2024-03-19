import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return { repositories: [], loading };
  }
  if (error) {
    throw new Error('Something went wrong while querying data' + error);
  }

  const repositories = data.repositories;

  return { repositories, loading}
};



export default useRepositories;
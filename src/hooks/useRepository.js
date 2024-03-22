import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id
    },
  });

  if (loading) {
    return {repository: '', loading}
  }

  if (error) {
    throw new Error('Something went wrong while querying data' + error);
  }

  const repository = data.repository;

  return { repository, loading };
}

export default useRepository;
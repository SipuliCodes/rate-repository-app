import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";


const useCurrentUser = ({includeReviews}) => {
  const { data, error, loading, refetch } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {
      includeReviews: includeReviews
    }
  });

  if (loading) {
    return {data: [] , loading}
  }

  if (error) {
    throw new Error('Something went wrong while querying reviews' + error);
  }

  return { data, loading, refetch };
};

export default useCurrentUser;
import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (id) => {
  const { data, error, loading } = useQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id
    },
  });

  if (loading) {
    return {reviews: [], loading}
  }

  if (error) {
    throw new Error('Something went wrong while querying for reviews' + error);
  }

  const reviews = data.repository.reviews;

  return { reviews, loading };
}

export default useReviews;
import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (variables) => {
  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables
      },
    });
  };

  if (loading) {
    return {reviews: [], loading}
  }

  if (error) {
    throw new Error('Something went wrong while querying for reviews' + error);
  }

  return {
    reviews: data?.repository.reviews,
    fetchMore: handleFetchMore,
    loading,
    ...result
  };
}

export default useReviews;
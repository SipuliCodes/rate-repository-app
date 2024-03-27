import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ first, selectedOrder, searchKey }) => {
  
  const variables = {
    first,
    orderBy: selectedOrder === 'highest' || selectedOrder === 'lowest' ? 'RATING_AVERAGE' : 'CREATED_AT',
    orderDirection: selectedOrder === 'lowest' ? 'ASC' : 'DESC',
    searchKeyword: searchKey
  };

  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  if (loading) {
    return {repositories: [], loading}
  }

  if (error) {
    throw new Error('Something went wrong while querying data' + error);
  }

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result
  };
};



export default useRepositories;
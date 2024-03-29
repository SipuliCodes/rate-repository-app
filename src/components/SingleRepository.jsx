import { useParams } from "react-router-native"
import RepositoryItem from "./RepositoryItem"
import useRepository from "../hooks/useRepository";
import Text from "./Text";
import useReviews from "../hooks/useReviews";
import { FlatList, StyleSheet, View } from "react-native";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading: loadingRepository } = useRepository(id);
  const { reviews, loading: loadingReviews, fetchMore } = useReviews({ id, first: 4 });

  if (loadingReviews || loadingRepository) {
    return (
      <Text>Loading...</Text>
    );
  }

  const reviewsNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  const onEndReach = () => {
    fetchMore();
  }

  return (
    <FlatList
      data={reviewsNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <><RepositoryItem item={repository} showButton={true} />{ItemSeparator()}</>}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default SingleRepository;
import { FlatList } from "react-native";
import useCurrentUser from "../hooks/useCurrentUser";
import ReviewItem from "./ReviewItem";
import Text from "./Text";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const MyReviews = () => {
  const { data, loading } = useCurrentUser({includeReviews: true})
  if (loading) {
    return <Text>loading...</Text>
  }
  const reviews = data.me.reviews;
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];
  console.log(data)
  console.log(reviewNodes);
  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        return (
          <ReviewItem review={item} />
        )
      }}
     />
  )
};

export default MyReviews;
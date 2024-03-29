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
  const { data, loading, refetch } = useCurrentUser({includeReviews: true})
  if (loading) {
    return <Text>loading...</Text>
  }
  const reviews = data.me.reviews;
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];
  
  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        return (
          <ReviewItem review={item} buttons={true} refetch={refetch}/>
        )
      }}
     />
  )
};

export default MyReviews;
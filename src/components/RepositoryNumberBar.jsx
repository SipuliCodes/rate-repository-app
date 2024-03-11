import { StyleSheet, View } from "react-native";
import RepositoryNumberBarItem from "./RepositoryNumberBarItem";

const styles = StyleSheet.create({
  flexContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
})

const RepositoryNumberBar = ({ item }) => {
  return (
    <View style={styles.flexContainerRow}>
      <RepositoryNumberBarItem title='Stars' number={item.stargazersCount} />
      <RepositoryNumberBarItem title='Forks' number={item.forksCount} />
      <RepositoryNumberBarItem title='Reviews' number={item.reviewCount} />
      <RepositoryNumberBarItem title='Rating' number={item.ratingAverage} />
    </View>
  );
};

export default RepositoryNumberBar;
import { View } from "react-native";
import { StyleSheet } from "react-native";
import RepositoryNumberBar from "./RepositoryNumberBar";
import RepositoryInfo from "./RepositoryInfo";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  }
});


const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container} >
      <RepositoryInfo item={item}/>
      <RepositoryNumberBar item={item} />
    </View>
  );
};

export default RepositoryItem;
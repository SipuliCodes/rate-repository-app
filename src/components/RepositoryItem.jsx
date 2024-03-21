import { View } from "react-native";
import { StyleSheet } from "react-native";
import RepositoryNumberBar from "./RepositoryNumberBar";
import RepositoryInfo from "./RepositoryInfo";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.thirdBackground,
  }
});


const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem" style={styles.container} >
      <RepositoryInfo item={item}/>
      <RepositoryNumberBar item={item} />
    </View>
  );
};

export default RepositoryItem;
import { Linking, Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
import RepositoryNumberBar from "./RepositoryNumberBar";
import RepositoryInfo from "./RepositoryInfo";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.thirdBackground,
  },
  button: {
    margin: 10,
    textAlign: 'center',
    padding: 10
  }
});


const RepositoryItem = ({ item, showButton }) => {
  return (
    <View testID="repositoryItem" style={styles.container} >
      <RepositoryInfo item={item}/>
      <RepositoryNumberBar item={item} />
      {showButton &&
        <Pressable onPress={() => Linking.openURL(item.url)}>
          <Text fontWeight='bold' style={styles.button} color='textThird' backgroundColor='primary'>Open in GitHub</Text>
        </Pressable>}
    </View>
  );
};

export default RepositoryItem;
import { Image, View } from "react-native";
import { StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  flexContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flexContainerCol: {
    display: 'flex',
    gap: 5,
    alignItems: 'flex-start',
    margin: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 10,
  },
  language: {
    borderRadius: 5,
    padding: 3
  }
})

const RepositoryInfo = ({ item }) => {
  
  return (
    <View style={styles.flexContainerRow}>
      <Image
        style={styles.avatar}
        source={{
          uri: item.ownerAvatarUrl
        }} />
      <View style={styles.flexContainerCol}>
        <Text fontSize='subheading' fontWeight='bold'> {item.fullName}</Text>
        <Text fontSize='subheading' color='textSecondary'> {item.description}</Text>
        <Text color='textThird' backgroundColor='primary' style={styles.language} > {item.language}</Text>
      </View>
    </View>
  );
};

export default RepositoryInfo;
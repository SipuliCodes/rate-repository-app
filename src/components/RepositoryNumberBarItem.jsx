import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  flexContainerCol: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  }
})

const RepositoryNumberBarItem = ({ title, number }) => {
  return (
    <View style={styles.flexContainerCol}>
      <Text fontWeight='bold'>{number < 1000 ? number : `${Math.round(number/100)/10}k`}</Text>
      <Text color='textSecondary'>{title}</Text>
    </View>
  );
};

export default RepositoryNumberBarItem
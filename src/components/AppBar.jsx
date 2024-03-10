import { View, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBgPrimary
  },
  text: {
    margin: 15,
    color: 'white',
    fontSize: 20
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title='Repositories' style={styles.text} />
    </View>
  )
};

export default AppBar;
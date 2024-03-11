import { View, StyleSheet, ScrollView } from "react-native";
import Constants from 'expo-constants';
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.secondaryBackground,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.flexContainer} horizontal>
        <AppBarTab title='Repositories' link='/' />
        <AppBarTab title='Sign in' link='/sign-in' />
      </ScrollView>
    </View>
  )
};

export default AppBar;
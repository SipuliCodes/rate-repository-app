import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from 'expo-constants';
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { useApolloClient, useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import Text from "./Text";
import useAuthStorage from "../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.secondaryBackground,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  text: {
    margin: 15,
  }
});

const AppBar = () => {
  const { data, loading } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
    
  }

  if (loading) {
    return 
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.flexContainer} horizontal>
        <AppBarTab title='Repositories' link='/' />
        {data.me && <AppBarTab title='Create Review' link='/create-review' />}
        {!data.me ? <AppBarTab title='Sign in' link='/sign-in' /> : <Pressable onPress={signOut}><Text fontSize='subheading' color='textThird' style={styles.text}>Sign Out</Text></Pressable> }
        
      </ScrollView>
    </View>
  )
};

export default AppBar;
import { Pressable, StyleSheet } from "react-native"
import Text from "./Text"
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  text: {
    margin: 15,
  }
})

const AppBarTab = ({ title, link }) => {

  return (
    <Pressable>
      <Link to={link}>
        <Text fontSize='subheading' color='textThird' style={styles.text}>{title}</Text>
      </Link>  
    </Pressable>
  );
};

export default AppBarTab;
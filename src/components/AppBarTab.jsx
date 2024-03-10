import { Pressable } from "react-native"
import Text from "./Text"


const AppBarTab = ({ title, style }) => {
  return (
    <Pressable><Text style={style}>{title}</Text></Pressable>
  );
};

export default AppBarTab;
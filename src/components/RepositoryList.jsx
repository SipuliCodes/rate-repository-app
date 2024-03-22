import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Text from "./Text";
import { Pressable } from "react-native";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        return (
          <Pressable onPress={() => navigate(`/${item.id}`)}>
            <RepositoryItem item={item} showButton={false} />
          </Pressable>
        )
      }}
    />
  );
};

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  
  if (loading) {
    return <Text>Loading...</Text>
  }
  
  return <RepositoryListContainer repositories = { repositories } />;
};

export default RepositoryList;
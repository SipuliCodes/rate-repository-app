import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Text from "./Text";
import { Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import theme from "../theme";

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({selectedOrder, setSelectedOrder, repositories }) => {
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
      ListHeaderComponent={
        <Picker
          header='Select an item...'
          selectedValue={selectedOrder}
          onValueChange={(itemValue) =>
            setSelectedOrder(itemValue)
          }>
          <Picker.Item style={{color: theme.colors.textSecondary}} label='Select an item...' value='latest' />
          <Picker.Item label="Latest repositories" value='latest' />
          <Picker.Item label="Highest rated repositories" value='highest' />
          <Picker.Item label="Lowest rated repositories" value='lowest' />
        </Picker>
      }
    />
  );
};

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState('');
  const { repositories, loading } = useRepositories({ selectedOrder });
  
  if (loading) {
    return <Text>Loading...</Text>
  }
  
  return <RepositoryListContainer selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} repositories = { repositories } />;
};

export default RepositoryList;
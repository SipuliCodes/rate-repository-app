import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { Pressable } from "react-native";
import { RepositoryListHeader } from "./RepositoryListHeader";
import React from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { setSearchQuery, searchQuery, setSelectedOrder, selectedOrder} = this.props;

    return (
      <RepositoryListHeader setSearchQuery={setSearchQuery} searchQuery={searchQuery} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder}
      />
    );
  };
  
  render() {
    const { repositories, navigate } = this.props;
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
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}
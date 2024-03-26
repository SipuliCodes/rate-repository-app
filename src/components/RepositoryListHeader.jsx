import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import theme from "../theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: theme.colors.thirdBackground,
    borderRadius: 5,
    margin: 10,
    marginBottom: 5
  }
});

export const RepositoryListHeader = ({searchQuery, setSearchQuery, setSelectedOrder, selectedOrder}) => {
  return (
    <View>
      <Searchbar
        style={styles.searchBox}
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Picker
          selectedValue={selectedOrder}
          onValueChange={(itemValue) =>
            setSelectedOrder(itemValue)
          }>
          <Picker.Item style={{color: theme.colors.textSecondary}} label='Select an item...' value='latest' />
          <Picker.Item label="Latest repositories" value='latest' />
          <Picker.Item label="Highest rated repositories" value='highest' />
          <Picker.Item label="Lowest rated repositories" value='lowest' />
      </Picker>
    </View>
  )
}
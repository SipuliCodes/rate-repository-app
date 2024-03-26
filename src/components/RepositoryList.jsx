import useRepositories from "../hooks/useRepositories";
import Text from "./Text";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { RepositoryListContainer } from "./RepositoryListContainer";
import { useNavigate } from "react-router-native";

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKey] = useDebounce(searchQuery, 500);
  const { repositories, loading } = useRepositories({ selectedOrder, searchKey });
  const navigate = useNavigate();
  
  if (loading) {
    return <Text>Loading...</Text>
  }
  
  return <RepositoryListContainer searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} repositories = { repositories } navigate={navigate} />;
};

export default RepositoryList;
import { useParams } from "react-router-native"
import RepositoryItem from "./RepositoryItem"
import useRepository from "../hooks/useRepository";
import Text from "./Text";

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading) {
    return (
      <Text>Loading...</Text>
    );
  }

  return (
    <RepositoryItem item={repository} showButton={true} />
  )
}

export default SingleRepository;
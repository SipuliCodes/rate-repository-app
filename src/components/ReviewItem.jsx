import { View, StyleSheet, Pressable, Alert } from "react-native"
import Text from "./Text"
import theme from "../theme";
import { format } from "date-fns";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
  flexContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flexContainerCol: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '70%',
    margin: 10
  },
  flexContainerWrapperCol: {
    display: 'flex',
    backgroundColor: theme.colors.thirdBackground
  },
  flexButtonsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  rating: {
    width: 50,
    height: 50,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 25,
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 20
  }
})

const ReviewItem = ({ review, buttons, refetch }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const viewRepository = () => {
    navigate(`/${review.repository.id}`)
  };

  const alert = () => {
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancelled')
      },
      {
        text: 'Delete',
        onPress: async () => {
          await deleteReview({ id: review.id })
          refetch()
        }
      }
    ])
  }

  return (
    <View style={styles.flexContainerWrapperCol}>
      <View style={styles.flexContainerRow}>
        <Text color='primary' fontWeight='bold' style={styles.rating}>{review.rating}</Text>
        <View style={styles.flexContainerCol}>
          <Text fontSize='subheading' fontWeight='bold'>{review.user.username}</Text>
          <Text>{format(review.createdAt, 'dd.MM.yyyy' )}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {buttons && <View style={styles.flexButtonsRow}>
        <Pressable onPress={viewRepository}>
          <Text color='textThird' fontWeight='bold' fontSize='subheading' style={[styles.button, { backgroundColor: '#1E90FF' }]}>View Repository</Text>
        </Pressable>
        <Pressable onPress={alert}>
          <Text color='textThird' fontWeight='bold' fontSize='subheading' style={[styles.button, { backgroundColor: '#FF1D18' }]}>Delete review</Text>
        </Pressable>
      </View>}
    </View>
  )
};

export default ReviewItem;
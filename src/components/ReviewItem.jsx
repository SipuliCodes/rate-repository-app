import { View, StyleSheet } from "react-native"
import Text from "./Text"
import theme from "../theme";
import { format } from "date-fns";

const styles = StyleSheet.create({
  flexContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.thirdBackground
  },
  flexContainerCol: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '70%',
    margin: 10
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
  }
})

const ReviewItem = ({ review }) => {

  return (
    <View style={styles.flexContainerRow}>
      <Text color='primary' fontWeight='bold' style={styles.rating}>{review.rating}</Text>
      <View style={styles.flexContainerCol}>
        <Text fontSize='subheading' fontWeight='bold'>{review.user.username}</Text>
        <Text>{format(review.createdAt, 'dd.MM.yyyy' )}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
};

export default ReviewItem;
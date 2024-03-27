import { useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../graphql/mutation"


const useDeleteReview = () => {
  const [mutate] = useMutation(DELETE_REVIEW);

  const deleteReview = async ({ id }) => {
    try {
      await mutate({ variables: { deleteReviewId: id } })
    }
    catch (e) {
      console.log(e);
    }
  }

  return [deleteReview]
};

export default useDeleteReview;
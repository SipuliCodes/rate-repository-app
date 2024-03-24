import { useMutation } from "@apollo/client"
import { SIGN_UP } from "../graphql/mutation"


const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({ variables: { user: { username, password } } });
    return data;
  };

  return [signUp, result];
};

export default useSignUp;
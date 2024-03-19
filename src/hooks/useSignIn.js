import { useMutation } from "@apollo/client"
import { SIGN_IN } from "../graphql/mutation"

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    mutate({ variables: { username, password } });
    return result;
  };

  return [signIn, result];
};

export default useSignIn;
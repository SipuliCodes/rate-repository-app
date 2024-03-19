import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutation";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore()
    return result;
  };

  return [signIn, result];
};

export default useSignIn;
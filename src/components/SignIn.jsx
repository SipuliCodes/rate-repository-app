import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useFormik } from "formik";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.thirdBackground,
    padding: 10
  },
  input: {
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 5,
    paddingLeft: 10
  },
  button: {
    textAlign: 'center',
    padding: 10,
    borderRadius: 5
  }
});

const initialValues = {
  username: '',
  password: ''
};

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formik.values.password}
        secureTextEntry
        onChangeText={formik.handleChange('password')}
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text style={styles.button} color='textThird' backgroundColor='primary'>Sign in</Text>
      </Pressable>
    </View>
  )
};

export default SignIn;
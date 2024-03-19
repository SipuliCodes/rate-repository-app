import { Pressable, StyleSheet, TextInput, View } from "react-native";
import * as yup from 'yup';
import Text from "./Text";
import theme from "../theme";
import { useFormik } from "formik";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

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
    paddingLeft: 10,
  },
  button: {
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 5
  },
  error: {
    borderColor: theme.colors.error
  }
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
})

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(username, password)

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate("/")
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, formik.errors.username && styles.error]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: theme.colors.error }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[styles.input, formik.errors.password && styles.error ]}
        placeholder="Password"
        value={formik.values.password}
        secureTextEntry
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.error }}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit}>
        <Text style={styles.button} color='textThird' backgroundColor='primary'>Sign in</Text>
      </Pressable>
    </View>
  )
};

export default SignIn;
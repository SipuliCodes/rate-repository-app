import { useFormik } from "formik";
import Text from "./Text";
import * as yup from 'yup';
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import theme from "../theme";
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";

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
  error: {
    borderColor: theme.colors.error,
  },
  button: {
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 5
  },
  errorText: {
    marginLeft: 5
  }
})

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5)
    .max(30)
    .required('Username is required'),
  password: yup
    .string()
    .min(5)
    .max(30)
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must be same')
    .required('Password confirmation is required')
});


const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password })
      navigate("/")
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, formik.errors.username && styles.error]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && <Text color='error' style={styles.errorText}>{formik.errors.username}</Text>}
      <TextInput
        style={[styles.input, formik.errors.password && styles.error]}
        placeholder="Password"
        value={formik.values.password}
        secureTextEntry
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && <Text color='error' style={styles.errorText}>{formik.errors.password}</Text>}
      <TextInput
        style={[styles.input, formik.errors.passwordConfirmation && styles.error]}
        placeholder="Password confirmation"
        value={formik.values.passwordConfirmation}
        secureTextEntrys
        onChangeText={formik.handleChange('passwordConfirmation')}
      />
      {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && <Text color='error' style={styles.errorText}>{formik.errors.passwordConfirmation}</Text>}
      <Pressable onPress={formik.handleSubmit}><Text style={styles.button} fontWeight='bold' fontSize='subheading' color='textThird' backgroundColor='primary' >Sign up</Text></Pressable>
    </View>
  )
};

export default SignUp;
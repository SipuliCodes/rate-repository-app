import { useFormik } from 'formik';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import * as yup from 'yup';
import theme from '../theme';
import Text from './Text';
import useCreateReview from '../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';

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
    borderColor: theme.colors.error
  },
  errorText: {
    color: theme.colors.error,
    marginLeft: 5
  },
  button: {
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    margin: 5
  }
})

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Minimum rating is 0')
    .max(100, 'Maximum rating is 100')
    .required('Rating is required'),
  text: yup
    .string()
})

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const data = await createReview({ review: { ownerName, repositoryName, rating: parseInt(rating), text }});
      navigate(`/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit,
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, formik.errors.ownerName && styles.error]}
        placeholder='Repository owner name'
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (<Text style={styles.errorText}>{formik.errors.ownerName}</Text>)}
      <TextInput
        style={[styles.input, formik.errors.repositoryName && styles.error]}
        placeholder='Repository name'
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (<Text style={styles.errorText}>{ formik.errors.repositoryName }</Text>)}
      <TextInput
        style={[styles.input, formik.errors.rating && styles.error]}
        placeholder='Rating between 0 and 100'
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
      />
      {formik.touched.rating && formik.errors.rating && (<Text style={styles.errorText}>{formik.errors.rating}</Text>)}
      <TextInput
        style={styles.input}
        placeholder='Review'
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text style={styles.button} color='textThird' backgroundColor='primary'>Create a review</Text>
      </Pressable>
    </View>
  )
};

export default CreateReview;
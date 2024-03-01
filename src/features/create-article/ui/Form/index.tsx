import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { FormikTextField } from '../../../../shared/components/FormikInputs/FormikTextField';
// import { useAppDispatch } from '../../../../store';
// import { createArticle } from '../../model/store/effects';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useCreateArticleMutation } from '../../../../api/articles';
import { ROUTES } from '../../../../router/routes';
import { getUserId } from '../../../../store/user/slice';
import styles from './createArticleForm.module.css';
import { createArtcileScheme } from './validation';

interface FormData {
  title: string;
  description: string;
  cover_image: string;
  content: string;
  section: string;
}

const validateRequired = (value: string) => {
  if (!value) {
    return 'Обязательное поле';
  }
};

export const CreateArticleForm = () => {
  const navigate = useNavigate();
  const [createArticle, { isLoading, isSuccess }] = useCreateArticleMutation();
  const userId = useSelector(getUserId);

  useEffect(() => {
    if (isSuccess) navigate(ROUTES.root);
  }, [isSuccess, navigate]);

  if (!userId) return null;

  const handleSubmit = (values: FormData, actions: any) => {
    createArticle({ user_id: userId, ...values });

    // dispatch(createArticle(values)).then(() => {
    //   navigate(ROUTES.root);
    // });
  };

  return (
    <div className={styles.createPostFormContainer}>
      <Formik
        initialValues={{
          title: '',
          description: '',
          cover_image: '',
          content: '',
          section: '',
        }}
        validationSchema={createArtcileScheme}
        onSubmit={handleSubmit}
        validateOnBlur
      >
        <Form className={styles.createPostForm}>
          <div className={styles.formField}>
            <FormikTextField label="Название" name="title" />
          </div>

          <div className={styles.formField}>
            <label htmlFor="section">Раздел:</label>
            <br />
            <Field
              component={Select}
              id="section"
              name="section"
              options={[
                { value: 'traveling', label: 'Путешествия' },
                { value: 'tech', label: 'Технологии' },
                { value: 'games', label: 'Игры' },
                { value: 'movies', label: 'Кино' },
                { value: 'music', label: 'Музыка' },
              ]}
            />
            <ErrorMessage name="section" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.formField}>
            <FormikTextField label="Краткое описание" name="description" />
          </div>

          <div className={styles.formField}>
            <FormikTextField label="Обложка" name="cover_image" />
          </div>

          <div className={styles.formField}>
            <FormikTextField label="Содержимое" name="content" type="textarea" />
          </div>

          <button type="submit" className={styles.submitButton}>
            Создать пост
          </button>

          <button type="reset" className={styles.resetButton}>
            Сбросить
          </button>
        </Form>
      </Formik>
    </div>
  );
};

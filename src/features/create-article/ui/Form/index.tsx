import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { ROUTES } from '../../../../router/routes';
import { FormikTextField } from '../../../../shared/components/FormikInputs/FormikTextField';
import { useAppDispatch } from '../../../../store';
import { createArticle } from '../../model/store/effects';
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values: FormData, actions: any) => {
    dispatch(createArticle(values)).then(() => {
      navigate(ROUTES.root);
    });
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

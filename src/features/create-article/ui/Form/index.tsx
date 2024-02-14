import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './createArticleForm.module.css';

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
  const handleSubmit = (values: FormData, actions: any) => {
    console.log(values);
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
        onSubmit={handleSubmit}
      >
        <Form className={styles.createPostForm}>
          <div className={styles.formField}>
            <label htmlFor="title">Название:</label>
            <Field type="text" id="title" name="title" className={styles.inputField} validate={validateRequired} />
            <ErrorMessage name="title" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.formField}>
            <label htmlFor="description">Раздел:</label>
            <br />
            <Field id="section" name="section" className={styles.inputField} />
            <ErrorMessage name="section" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.formField}>
            <label htmlFor="description">Краткое описание:</label>
            <br />
            <Field as="textarea" id="description" name="description" className={styles.textareaField} />
            <ErrorMessage name="description" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.formField}>
            <label htmlFor="coverImage">Обложка:</label>
            <br />
            <Field id="coverImage" name="cover_image" className={styles.fileInput} />
            <ErrorMessage name="coverImage" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.formField}>
            <label htmlFor="content">Содержимое:</label>
            <br />
            <Field as="textarea" id="content" name="content" className={styles.textareaField} />
            <ErrorMessage name="content" component="div" className={styles.errorMessage} />
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

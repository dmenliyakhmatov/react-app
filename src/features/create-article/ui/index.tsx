import { CreateArticleForm } from './Form';
import s from './createArticle.module.css';

export const CreateArticle = () => {
  return (
    <div className={s.root}>
      <h2>Создание нового поста</h2>
      <CreateArticleForm />
    </div>
  );
};

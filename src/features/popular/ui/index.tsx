import { useFetch } from '../../../hooks/useFetch';
import { useToggle } from '../../../hooks/useToggle';
import { ArticleList } from '../../../shared/features/ArticleList/ui';
import { ArticleV2 } from '../../../shared/types/articles';

export const Popular = () => {
  const { data: articles, isLoading } = useFetch<ArticleV2[]>('/articles');

  const [isShow, toggle] = useToggle(true);

  if (isLoading) return <div>Loading....</div>;
  if (!articles) return <div>{`There aren't articles `}</div>;

  return (
    <div>
      <FieldComponent label="field1" value="sting value" onChange={(value: string) => {}} />
      <FieldComponent
        label="field1"
        value={{ name: 'Dmitrii', age: 29 }}
        onChange={(value: { name: string; age: number }) => {}}
      />
      {isShow && <h1>скрой меня</h1>}
      <button onClick={toggle}>Скрыть</button>
      <ArticleList articles={articles} />;
    </div>
  );
};

// useEffect(() => {
//   setIsLoading(true);

//   get('/articles')
//     .then(({ data: recievedArticles }) => {
//       setArtcicles(recievedArticles);
//     })
//     .catch(console.error)
//     .finally(() => setIsLoading(false));
// }, []);

// const [articles, setArtcicles] = useState<ArticleV2[] | null>(null);

// const [isLoading, setIsLoading] = useState(false);

type FieldProps<T> = {
  label: string;
  value: T;
  onChange: (value: T) => void;
};

const getFieldProps = (value: string) => ({
  label: 'string',
  value: value,
  onChange: () => value,
});

const FieldComponent = <T,>(props: FieldProps<T>) => {
  return <div>Field</div>;
};

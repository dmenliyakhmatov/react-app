import { useFetch } from '../../../hooks/useFetch';
import { useToggle } from '../../../hooks/useToggle';
import { ArticleList } from '../../../shared/features/ArticleList/ui';

export const Popular = () => {
  const { data: articles, isLoading } = useFetch('/articles');

  const [isShow, toggle] = useToggle(true);

  if (isLoading) return <div>Loading....</div>;
  if (!articles) return <div>{`There aren't articles `}</div>;

  return (
    <div>
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

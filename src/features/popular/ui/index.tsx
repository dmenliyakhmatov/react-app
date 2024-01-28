import { useEffect, useState } from 'react';
import { ArticleList } from '../../../shared/features/ArticleList/ui';
import { Article } from '../../../shared/types/articles';

export const Popular = () => {
  const [articles, setArtcicles] = useState<Article[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch('https://68f241df693169c2.mokky.dev/articles')
      .then(res => {
        if (!res.ok) throw res;
        return res;
      })
      .then(res => res.json())

      .then(recievedArticles => {
        setArtcicles(recievedArticles);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setArtcicles(
      prev =>
        prev?.map((article, index) => ({ ...article, title: index === 3 ? article.title + count : article.title })) ??
        null,
    );
  }, [count]);

  if (isLoading) return <div>Loading....</div>;
  if (!articles) return <div>{`There aren't articles `}</div>;

  return (
    <div>
      {/* <Timer />
      <WindowWidth /> */}
      <button onClick={increment}>Parent Increment</button>
      <h3>{count}</h3>
      <ArticleList articles={articles} />;
    </div>
  );
};

// export const Popular = () => {
//   const location = useLocation();
//   // const [params, setParams] = useSearchParams();
//   const [count, setCount] = useState(0);
//   const [isVisibleCounter, setIsVisibleCounter] = useState(true);

//   const [articles, setArtcicles] = useState(mockPosts);

//   // const increment = () => {
//   //   setCount(count + 1);
//   // };

//   // useEffect(() => {
//   //   if (params.get('category') !== 'all') {
//   //     setArtcicles(
//   //       mockPosts.filter(article => article.section.toLowerCase() === params.get('category')?.toLowerCase()),
//   //     );
//   //   }
//   // }, [params]);

//   return (
//     <div>
//       {/* <button onClick={increment}>Parent Increment</button>
//       <button onClick={() => setIsVisibleCounter(prev => !prev)}>{isVisibleCounter ? 'Hide' : 'Show'}</button>
//       {isVisibleCounter && <Counter parentCount={count} />} */}
//       {/* <select
//         name=""
//         id=""
//         value={params.get('category') || 'all'}
//         onChange={e => {
//           params.set('category', e.target.value);
//           setParams(params);
//         }}
//       >
//         <option value="all">all</option>
//         <option value="Technology">technology</option>
//         <option value="sports">technology</option>
//       </select> */}
//       <ArticleList articles={articles} />;
//     </div>
//   );
// };

// const Counter = ({ parentCount }: { parentCount: number }) => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   useEffect(() => {
//     console.log('counter has mounted');

//     return () => console.log('counter has unmounted');
//   }, []);

//   useEffect(() => {
//     console.log(`counter has updated with ${count}`);

//     return () => {
//       console.log(`counter before update with ${count}`);
//     };
//   }, [count]);

//   return (
//     <div>
//       <h2>Counter</h2>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// };

// const createCounter = () => {
//   let count = 0;

//   return () => {
//     count = count++;
//     return count;
//   };
// };

// const increaseCount = createCounter();
// const increasedCount = increaseCount();

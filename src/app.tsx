import { PageWrapper } from './features/page-wrapper';
import { mockPosts } from './features/post/model/mockData';
import { PostCard } from './features/post/ui/PostCard';




export const App = () => {
  console.log('render app');

  return (
    <PageWrapper >
      <h1>Hello</h1>

      {mockPosts.map((data, index) => <PostCard key={index} {...data} />)}


    </PageWrapper>
  );



};


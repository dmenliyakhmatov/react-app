import avatar from 'assets/images/avatar.jpg';
import cover from 'assets/images/cover.webp';
import { PageWrapper } from './features/page-wrapper';
import { mockPosts } from './features/post/model/mockData';
import { PostCard } from './features/post/ui/PostCard';


const postData = {
  section: 'Technology',
  authorName: 'John Doe',
  authorAvatar: avatar,
  publicationDate: 'January 15, 2023',
  title: 'Lorem Ipsum Dolor Sit Amet',
  coverImage: cover,
  views: 1234,
  likes: 56,
  comments: 23,
  bookmarks: 10,
};

const postData2 = {
  section: 'Games',
  authorName: 'John Doe',
  authorAvatar: avatar,
  publicationDate: 'January 15, 2023',
  title: 'Lorem Ipsum Dolor Sit Amet',
  coverImage: cover,
  views: 1234,
  likes: 56,
  comments: 23,
  bookmarks: 10,
};

const arrData = [postData, postData2]


export const App = () => {
  console.log('render app');


  return (
    <PageWrapper>
      <h1>Hello</h1>

      {mockPosts.map((data, index) => <PostCard key={index} {...data} />)}


    </PageWrapper>
  );



};


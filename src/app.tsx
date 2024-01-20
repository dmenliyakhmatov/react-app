import avatar from 'assets/images/avatar.jpg';
import cover from 'assets/images/cover.webp';
import { useState } from 'react';
import { PageWrapper } from './features/page-wrapper';
import { PostCard } from './features/post/ui/PostCard';
import { mockPosts } from './mockData';

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

const arrData = [postData, postData2];

export const App = () => {
  console.log('render app');
  const [inputValue, setInputValue] = useState('');
  const [articles, setArticles] = useState(mockPosts);

  const onDeleteHandler = (id: number) => {
    setArticles(prev => prev.filter(article => article.id !== id));
  };

  return (
    <PageWrapper>
      <h1>Hello</h1>

      <input
        type="text"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />

      {articles.map((data, index) => (
        <PostCard key={index} post={data} onDeleteClick={onDeleteHandler} />
      ))}
    </PageWrapper>
  );
};

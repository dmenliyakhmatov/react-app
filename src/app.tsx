import avatar from 'assets/images/avatar.jpg';
import cover from 'assets/images/cover.webp';
import { useState } from 'react';
import { PageWrapper } from './features/page-wrapper';
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
  const [inputValue, setInputValue] = useState('')

  return (
    <PageWrapper>
      <h1>Hello</h1>

      <input type="text" value={inputValue} onChange={(e) => {
        setInputValue(e.target.value)
      }} />

      <PostCard

        {...postData}
      />
      <PostCard

        {...postData2}
      />


      {arrData.map((data, index) => <PostCard key={index} {...data} />)}


    </PageWrapper>
  );



};


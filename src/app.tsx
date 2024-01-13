import React, { useState } from 'react';
import { PageWrapper } from './features/page-wrapper';
import { mockPosts } from './features/post/model/mockData';
import { PostCard } from './features/post/ui/PostCard';



// const RenderData = mockPosts.map((post, index) =>
// <PostCard key={index}

//   post={post}
// />


// const RenderData = [
//   <PostCard post={mockPosts[0]} key={0} />,
//   <PostCard post={mockPosts[1]} key={1} />,
//   <PostCard post={mockPosts[2]} key={2} />
// ]

export const App = () => {
  const [posts, setPosts] = useState(mockPosts)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const filteredPost = mockPosts.filter((post) => post.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    setPosts(filteredPost)
  }

  return (
    <PageWrapper onSearch={handleSearch}>
      <h1>Hello</h1>

      {posts.map((post, index) =>
        <PostCard key={index}
          // {...post}
          // authorAvatar={post.authorAvatar}
          // likes={post.likes}
          // authorName={post.authorAvatar}
          // bookmarks={post.bookmarks}
          // comments={post.comments}
          // coverImage={post.coverImage}
          // publicationDate={post.publicationDate}
          // section={post.section}
          // title={post.title}
          // views={post.views}
          post={post}
        />)}


    </PageWrapper>
  );



};


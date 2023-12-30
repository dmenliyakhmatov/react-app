import { PostCard } from './features/post';
import './global.css';


type UserCardProps = {
  name: string
  birthdate: string
  position: string
  lastOnline: string
};


const postData = {
  section: 'Technology',
  authorName: 'John Doe',
  authorAvatar: 'path-to-avatar.jpg',
  publicationDate: 'January 15, 2023',
  title: 'Lorem Ipsum Dolor Sit Amet',
  coverImage: 'path-to-cover-image.jpg',
  views: 1234,
  likes: 56,
  comments: 23,
  bookmarks: 10,
};

const postData2 = {
  section: 'Games',
  authorName: 'John Doe',
  authorAvatar: 'path-to-avatar.jpg',
  publicationDate: 'January 15, 2023',
  title: 'Lorem Ipsum Dolor Sit Amet',
  coverImage: 'path-to-cover-image.jpg',
  views: 1234,
  likes: 56,
  comments: 23,
  bookmarks: 10,
};

const arrData = [postData, postData2]


export const App = () => {


  return (
    <div style={{ padding: '24px' }}>
      <h1>Hello</h1>

      <PostCard

        {...postData}
      />
      <PostCard

        {...postData2}
      />


      {arrData.map((data, index) => <PostCard key={index} {...data} />)}


    </div>
  );



};

// return React.createElement('div', { style: { padding: "24px" } },
//   React.createElement('button', { onClick: updateUserData, style: { border: '1px solid red' } }, 'Update Data')
// )

// return (
//   <div className={s.root}>
//     <h1>{greeting}</h1>

//     {userData.map((user, index) => (
//       <UserCard key={index} {...user} />
//     ))}

//     <button className={isAdmin ? 'admin' : 'default'} onClick={updateUserData}>Update Data</button>

//     <button onClick={() => {
//       setGreeting('Bye')
//     }}>set admin</button>


//   </div>
// );

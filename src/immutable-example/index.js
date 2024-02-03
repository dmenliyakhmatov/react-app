const user = {
  id: 1,
  name: 'Dmitrii',
  age: 29,
  formState: {
    inputs: {},

    errors: [],
  },
  friends: [
    {
      id: 2,
      name: 'Maksim',
      age: 29,
    },
    {
      id: 3,
      name: 'Alexandra',
      age: 25,
    },
  ],
};

const action = {
  type: 'createUser',
  payload: {
    user,
  },
};

const user2 = user;

// console.log(user2);

// user.name = 'Alexey';

// console.log(user);

// console.log(user2);

const createUserWithoutAge = user => {
  const newUser = { ...user };

  delete newUser.age;

  return newUser;
};

const updateName = (user, name) => {
  const newUser = { ...user, name };

  return newUser;
};

const userWithoutAge = createUserWithoutAge(user);

const newNameUser = updateName(user, 'Alexey');

const addFriend = (user, friend) => {
  const newFriends = [...user.friends, friend];

  const newUser = { ...user, friends: newFriends };

  return newUser;
};

const userWithNewFriend = addFriend(newNameUser, {
  id: 4,
  name: 'Vladimir',
  age: 25,
});

console.log('user', user);
console.log('userWithoutAge', userWithoutAge);
console.log('newNameUser', newNameUser);
console.log('userWithNewFriend', userWithNewFriend);

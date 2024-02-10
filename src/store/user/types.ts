type User = {
  id: number;
  fullName: string;
  email: string;
  token: string;
  avatar: string;
};

export type UserResponse = {
  data: User;
  token: string;
};

export type AuthRequestData = {
  email: string;
  password: string;
};

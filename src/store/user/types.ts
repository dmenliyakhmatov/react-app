export type AuthParams = {
  email: string;
  password: string;
};

export type User = {
  avatar: string;
  email: string;
  fullName: string;
  id: number;
};

export type AuthResponse = {
  data: User;
  token: string;
};

export type Article = {
  id: number;
  section: string;
  authorName: string;
  authorAvatar: string;
  publicationDate: string;
  title: string;
  coverImage: string;
  views: number;
  likes: number;
  comments: number;
  bookmarks: number;
};

export type ArticleV2 = {
  id: number;
  section: string;
  publication_date: string;
  title: string;
  cover_image: string;
  views: number;
  likes: number;
  comments: number;
  bookmarks: number;
  user: {
    id: number;
    fullName: string;
    avatar: string;
  };
};

export type CreateArticleActionPayload = {
  title: string;
  description: string;
  cover_image: string;
  content: string;
  section: string;
};

export type CreateArticleParams = CreateArticleActionPayload & {
  user_id: number;
  publication_date: string;
  views: number;
  likes: number;
  comments: number;
  bookmarks: number;
};

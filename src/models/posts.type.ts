export type PostType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type PostsList = {
  item: PostType;
  index: number;
};

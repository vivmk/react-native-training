export interface PostsList {
  item: PostType;
  key: number;
}

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

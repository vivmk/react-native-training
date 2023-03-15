export interface PostsList {
  item: PostType;
  index: number;
}

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

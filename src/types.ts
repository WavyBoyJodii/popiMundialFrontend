export interface BloggerType {
  username: string;
  password: string;
  email: string;
  admin: boolean;
}

export interface PostType {
  tags: string[];
  _id: string;
  title: string;
  art: string;
  mediaUrl: string;
  content: string;
  genre: string;
  blogger: BloggerType;
  __v: number;
  date_created: Date;
}

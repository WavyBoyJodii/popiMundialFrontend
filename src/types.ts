export interface BloggerType {
  username: string;
  password: string;
  email: string;
  admin: boolean;
}

export interface PostType {
  _id: string;
  title: string;
  art: string;
  mediaUrl: string;
  content: string;
  date_created: Date;
  tags: string[];
  genre: string;
  blogger: BloggerType;
  __v: number;
}

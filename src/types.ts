import * as EditorJS from '@editorjs/editorjs';

export interface BloggerType {
  username: string;
  password: string;
  email: string;
  admin: boolean;
}

export interface ContentData {
  blocks: EditorJS.OutputBlockData[];
  time: number;
  version: string;
}

export interface PostType {
  _id: string;
  title: string;
  art: string;
  mediaUrl: string;
  content: ContentData;
  date_created: Date;
  tags: string[];
  genre: string;
  blogger: BloggerType;
  __v: number;
}

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PostType } from '@/types';
import axios, { AxiosResponse } from 'axios';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ParamsProp {
  genre: string;
}

interface LoaderProps {
  params: ParamsProp;
}

export async function genreLoader({ params }: LoaderProps) {
  try {
    const result: AxiosResponse = await axios.get<PostType[]>(
      'https://firstblogbackend-production.up.railway.app/posts'
    );
    const allPosts: PostType[] = result.data.allPosts;
    const filteredPosts = allPosts.filter(
      (post) => post.genre === params.genre
    );
    return { filteredPosts };
  } catch (err) {
    console.log(err);
  }
}

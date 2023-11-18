import { PostType } from '@/types';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import MicroPost from './MicroPost';

interface PostSelectorProps {
  activePost: PostType;
}

export default function PostSelector({ activePost }: PostSelectorProps) {
  const [nextPost, setNextPost] = useState<PostType | null>(null);
  const [prevPost, setPrevPost] = useState<PostType | null>(null);

  useEffect(() => {
    async function getPosts() {
      try {
        const result: AxiosResponse = await axios.get<PostType[]>(
          'https://firstblogbackend-production.up.railway.app/posts'
        );
        console.log(result);
        const allPosts: PostType[] = result.data.allPosts;
        if (allPosts.length > 0) {
          const indexOfPost = allPosts.findIndex(
            (post) => post._id === activePost._id
          );
          if (indexOfPost === 0) {
            setNextPost(allPosts[indexOfPost + 1]);
            setPrevPost(null);
          } else {
            setNextPost(allPosts[indexOfPost + 1]);
            setPrevPost(allPosts[indexOfPost - 1]);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    getPosts();
  }, [activePost]);

  return (
    <div className=" h-fit md:h-36 w-full md:w-1/2 p-14 flex flex-col md:flex-row justify-center items-center gap-14 mb-5 place-self-center rounded-xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-pink-200 to-pink-400">
      {prevPost && <MicroPost data={prevPost} isPrev={true} isNext={false} />}
      {nextPost && <MicroPost data={nextPost} isPrev={false} isNext={true} />}
    </div>
  );
}

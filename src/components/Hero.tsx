import { useEffect, useState } from 'react';
import Container from './Container';
import Post from './Post';
import axios, { AxiosResponse } from 'axios';
import { PostType } from '@/types';
import LatestPostList from './LatestPostList';

export default function Hero() {
  const [threeLatestPosts, setThreeLatestPosts] = useState<PostType[]>([]);
  const [latestPosts, setLatestPosts] = useState<PostType[]>([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const result: AxiosResponse = await axios.get<PostType[]>(
          'https://firstblogbackend-production.up.railway.app/posts'
        );
        console.log(result);
        const sliced: PostType[] = result.data.allPosts.slice(0, 3);
        const postsAfterThird: PostType[] = result.data.allPosts.slice(3);
        setThreeLatestPosts(sliced);
        setLatestPosts(postsAfterThird);
      } catch (err) {
        console.log(err);
      }
    }
    getPosts();
  }, []);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 grid grid-cols-1 lg:p-8 lg:grid-cols-2 lg:grid-rows-2 rounded-lg gap-4 h-full">
          {/* <div className="absolute top-72 -left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-96 left-14 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-32 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 "></div> */}
          {threeLatestPosts &&
            threeLatestPosts.map((post, index) => (
              <Post
                key={post._id}
                data={post}
                isTall={index === 0 ? true : false}
                className={`${
                  index === 0 ? 'col-span-1 row-span-2' : 'col-span-1'
                }`}
              />
            ))}
        </div>
      </div>
      <LatestPostList
        posts={latestPosts}
        isGenre={false}
        isLatest={true}
        genre=""
      />
    </Container>
  );
}

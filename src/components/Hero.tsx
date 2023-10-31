import { useEffect, useState } from 'react';
import Container from './Container';
import Post from './Post';
import axios, { AxiosResponse } from 'axios';
import { PostType } from '@/types';

export default function Hero() {
  const [threeLatestPosts, setThreeLatestPosts] = useState<PostType[]>([]);

  useEffect(() => {
    async function getThree() {
      try {
        const result: AxiosResponse = await axios.get<PostType[]>(
          'https://firstblogbackend-production.up.railway.app/posts'
        );
        console.log(result);
        const sliced: PostType[] = result.data.allPosts.slice(0, 3);
        setThreeLatestPosts(sliced);
      } catch (err) {
        console.log(err);
      }
    }
    getThree();
  }, []);

  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        <div className="p-4 grid grid-cols-1 sm:p-6 lg:p-8 md:grid-cols-2 md:grid-rows-2 rounded-lg gap-4 max-h-screen">
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
    </Container>
  );
}

import { useParams } from 'react-router';
import LatestPostList from './LatestPostList';
import { useEffect, useState } from 'react';
import { PostType } from '@/types';
import axios, { AxiosResponse } from 'axios';
import Container from './Container';

export default function GenrePage() {
  const params = useParams();

  const [genrePosts, setGenrePosts] = useState<PostType[] | null>(null);

  useEffect(() => {
    async function getPosts() {
      try {
        const result: AxiosResponse = await axios.get<PostType[]>(
          'https://firstblogbackend-production.up.railway.app/posts'
        );
        // console.log(result);
        // console.log(params.genre);
        const allPosts: PostType[] = result.data.allPosts;
        const filteredPosts = allPosts.filter(
          (post) => post.genre === params.genre
        );
        if (filteredPosts.length === 0) {
          setGenrePosts(null);
        } else {
          //   console.log(filteredPosts);
          setGenrePosts(filteredPosts);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getPosts();
  }, [params.genre]);

  if (!genrePosts)
    return (
      <Container>
        <p className=" space-y-4 p-4 h-auto text-2xl mb-6 text-center">
          No posts in {params.genre}
        </p>
      </Container>
    );
  return (
    <Container>
      {genrePosts && (
        <LatestPostList
          posts={genrePosts}
          isGenre={true}
          isLatest={false}
          genre={`${params.genre}`}
        />
      )}
    </Container>
  );
}

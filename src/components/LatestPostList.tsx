import SmallPost from './SmallPost';
import { PostType } from '@/types';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

interface PostListProps {
  posts: PostType[];
}

export default function LatestPostList({ posts }: PostListProps) {
  const [displayedPosts, setDisplayedPosts] = useState<PostType[]>([]);
  const [allPosts, setAllPosts] = useState<PostType[]>([]);
  //   const [morePosts, setMorePosts] = useState<boolean>(false);

  const displayNextPosts = (numPostsToDisplay: number) => {
    const remainingPosts = allPosts.slice(
      displayedPosts.length,
      displayedPosts.length + numPostsToDisplay
    );
    setDisplayedPosts([...displayedPosts, ...remainingPosts]);
  };

  useEffect(() => {
    setAllPosts(posts);
    displayNextPosts(6);
  }, [posts]);

  const loadMorePosts = () => {
    displayNextPosts(6);
  };
  //   function extractPosts(x: PostType[]) {
  //     const newPosts: PostType[] = [];
  //     const numToExtract = Math.min(6, x.length);
  //     for (let i = 0; i < numToExtract; i += 1) {
  //       newPosts.push(x.shift()!);
  //     }
  //     if (x.length > 0) {
  //       setMorePosts(true);
  //     } else {
  //       setMorePosts(false);
  //     }
  //     setDisplayedPosts(newPosts);
  //   }

  return (
    <div className=" space-y-4 p-4 h-auto">
      <h1 className=" text-2xl">Latest Posts</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedPosts.map((post) => (
          <SmallPost key={post._id} data={post} />
        ))}
      </div>
      {displayedPosts.length < allPosts.length && (
        <div className="flex place-content-center p-4">
          <Button variant={'outline'} onClick={() => loadMorePosts()}>
            View More
          </Button>{' '}
        </div>
      )}
    </div>
  );
}

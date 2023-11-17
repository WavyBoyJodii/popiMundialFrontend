import SmallPost from './SmallPost';
import { PostType } from '@/types';
import { useState, useEffect } from 'react';
// import { Button } from './ui/button';
import { useLocation } from 'react-router-dom';

interface PostListProps {
  posts: PostType[];
  isGenre: boolean;
  isLatest: boolean;
  genre: string | null;
}

export default function LatestPostList({
  posts,
  isGenre,
  isLatest,
  genre,
}: PostListProps) {
  // const [displayedPosts, setDisplayedPosts] = useState<PostType[]>([]);
  const [allPosts, setAllPosts] = useState<PostType[]>([]);
  const location = useLocation();

  // const displayNextPosts = (numPostsToDisplay: number) => {
  //   const remainingPosts = allPosts.slice(
  //     displayedPosts.length,
  //     displayedPosts.length + numPostsToDisplay
  //   );
  //   setDisplayedPosts([...displayedPosts, ...remainingPosts]);
  // };

  useEffect(() => {
    setAllPosts(posts);
    // if (posts.length > 0) {
    //   displayNextPosts(6);
    // } else {
    //   setDisplayedPosts([]);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts, location.key]);

  // const loadMorePosts = () => {
  //   displayNextPosts(6);
  // };

  return (
    <div className=" space-y-4 p-4 h-auto">
      {isGenre && <h1 className=" text-2xl mb-6 text-center">{genre}</h1>}
      {isLatest && <h1 className=" text-2xl mb-6 text-center">Latest Posts</h1>}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allPosts.map((post) => (
          <SmallPost key={post._id} data={post} />
        ))}
      </div>
      {/* {displayedPosts.length < allPosts.length && (
        <div className="flex place-content-center p-4">
          <Button variant={'outline'} onClick={() => loadMorePosts()}>
            View More
          </Button>{' '}
        </div>
      )} */}
    </div>
  );
}

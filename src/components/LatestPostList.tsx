import SmallPost from './SmallPost';
import { PostType } from '@/types';

interface PostListProps {
  posts: PostType[];
}

export default function LatestPostList({ posts }: PostListProps) {
  // const sixPosts = posts.slice(0,5);
  return (
    <div className=" space-y-4 p-4 h-screen">
      <h1 className=" text-2xl">Latest Posts</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <SmallPost key={post._id} data={post} />
        ))}
      </div>
    </div>
  );
}

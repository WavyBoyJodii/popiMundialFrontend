import Container from './Container';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { PostType } from '@/types';
import { DateTime } from 'luxon';
import validator from 'validator';

// interface RouteParams {
//   postId: string;
// }
// interface PostPageData {
//   post: PostType;
// }
export async function loader({ params }) {
  const result = await axios.get(
    `https://firstblogbackend-production.up.railway.app/post/${params.postId}`
  );
  console.log(result);
  const post = result.data.post;
  console.log(post);
  return { post };
}

export default function PostPage() {
  const { post } = useLoaderData();
  if (!post) {
    return <p>Loading....</p>;
  }
  const postDate = new Date(post.date_created);
  const dateFormatted = DateTime.fromJSDate(postDate).toLocaleString(
    DateTime.DATE_MED
  );
  const decodedArt = validator.unescape(post.art);
  const decodedContent = validator.unescape(post.content);
  const decodedTitle = validator.unescape(post.title);
  return (
    <Container>
      <div className="flex flex-col gap-8 place-content-center">
        <h4>{post.genre}</h4>
        <h1 className=" text-5xl font-extrabold text-center">{decodedTitle}</h1>
        <div className="flex justify-center divide-x divide-gray-600">
          <p className=" text-xs text-gray-500 space-y-3">
            By: {post.blogger.username}
          </p>
          <p className=" text-xs text-gray-500 space-y-3">
            On: {dateFormatted}
          </p>
        </div>
        <div className=" w-2/3 h-1/3">
          <img
            src={decodedArt}
            className=" h-full w-full aspect-auto rounded-xl object-cover"
          />
        </div>
        <div className=" p-20 text-base">{decodedContent}</div>
      </div>
    </Container>
  );
}

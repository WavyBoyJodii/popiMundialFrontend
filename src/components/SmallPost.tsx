import { PostType } from '@/types';
import { Card, CardContent } from './ui/card';
import validator from 'validator';
import { Link } from 'react-router-dom';

interface SmallPostProps {
  data: PostType;
}

export default function SmallPost({ data }: SmallPostProps) {
  const decodedArt = validator.unescape(data.art);
  return (
    <Link to={`/post/${data._id}`}>
      <Card className="flex flex-col w-auto h-auto rounded-3xl outline-0 focus:ring-1 hover:ring-1 ring-current transition duration-300 p-0 hover:cursor-pointer">
        <CardContent className="p-0 relative">
          <img
            src={decodedArt}
            className=" aspect-square object-cover rounded-3xl"
          />
          <div className="backdrop-filter backdrop-blur-md bg-opacity-50 absolute bottom-0 w-full h-16 rounded-b-3xl text-center p-6  text-xs md:text-sm  bg-white overflow-y-clip">
            {data.title}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

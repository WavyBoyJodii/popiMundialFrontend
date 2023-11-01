import { PostType } from '@/types';
import { Card, CardContent } from './ui/card';
import validator from 'validator';

interface SmallPostProps {
  data: PostType;
}

export default function SmallPost({ data }: SmallPostProps) {
  const decodedArt = validator.unescape(data.art);
  return (
    <Card className="flex flex-col w-auto h-auto rounded-3xl outline-0 focus:ring-1 hover:ring-1 ring-current transition duration-300 p-0 hover:cursor-pointer">
      <CardContent className="p-0 relative">
        <img
          src={decodedArt}
          className=" aspect-square object-cover rounded-3xl"
        />
        <div className="backdrop-filter backdrop-blur-md bg-opacity-50 absolute bottom-0 w-full h-16 rounded-b-3xl text-center p-6 text-lg bg-white">
          {data.title}
        </div>
      </CardContent>
    </Card>
  );
}

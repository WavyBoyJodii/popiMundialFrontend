import { PostType } from '@/types';
import validator from 'validator';
import { Link } from 'react-router-dom';

interface MicroPostProps {
  data: PostType;
  isPrev: boolean;
  isNext: boolean;
}

export default function MicroPost({ data, isPrev, isNext }: MicroPostProps) {
  const decodedArt = validator.unescape(data.art);
  const decodedTitle = validator.unescape(data.title);
  return (
    <Link to={`/post/${data._id}`}>
      <div className=" h-full w-full flex flex-row gap-4">
        <img
          src={`${decodedArt}`}
          className=" h-24 w-24 aspect-square object-cover"
        />
        <div className=" flex flex-col gap-4 w-64 h-24">
          {isPrev && (
            <p className=" font-light text-xs text-gray-600">Previous Post</p>
          )}
          {isNext && (
            <p className=" font-light text-xs text-gray-600">Next Post</p>
          )}
          <p className=" font-semibold text-sm">{decodedTitle}</p>
        </div>
      </div>
    </Link>
  );
}

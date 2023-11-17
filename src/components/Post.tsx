import { PostType } from '@/types';
import { Card, CardContent, CardFooter } from './ui/card';
import { DateTime } from 'luxon';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import EditorOutput from './EditorOutput';

interface PostProps {
  data: PostType;
  className: string;
  isTall: boolean;
}

export default function Post({ data, className, isTall }: PostProps) {
  const postDate = new Date(data.date_created);
  const dateFormatted = DateTime.fromJSDate(postDate).toLocaleString(
    DateTime.DATE_MED
  );
  const decodedArt = validator.unescape(data.art);
  const route = data._id;
  return (
    <Card
      className={`${
        isTall ? 'flex-col' : 'flex-row'
      } ${className} flex rounded-3xl outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 sm:p-2 m-0`}
    >
      <CardContent className="pt-4">
        <div
          className={` ${
            isTall ? 'w-full h-96' : 'md:w-48 lg:w-64 xl:w-72'
          } aspect-square  bg-gray-200 rounded-xl`}
        >
          <img
            src={decodedArt}
            className={` ${
              isTall ? 'h-96 w-full rounded-t-xl' : 'h-72 w-72 rounded-l-xl'
            } aspect-auto object-fit`}
          />
        </div>
      </CardContent>
      <CardFooter
        className={` ${
          isTall ? '' : 'w-64 pt-4'
        } flex flex-col items-start gap-2`}
      >
        <div className="flex flex-col gap-4">
          <p className=" text-xs text-gray-500 space-y-3">
            {data.blogger.username}
            <span className="ml-5">{dateFormatted}</span>
          </p>
          <p
            className={` ${
              isTall ? '' : 'text-sm'
            } font-semibold text-black lg:text-lg`}
          >
            {data.title}
          </p>
          {/* <p className=" text-gray-700">{post}</p> */}
          {data && (
            <EditorOutput content={data.content} className=" text-gray-700" />
          )}
          <Link to={`/post/${route}`}>
            <Button>See Post</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

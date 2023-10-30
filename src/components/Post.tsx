import { PostType } from '@/types';
import { Card, CardContent, CardFooter } from './ui/card';

interface PostProps {
  data: PostType;
  className: string;
  isTall: boolean;
}

export default function Post({ data, className, isTall }: PostProps) {
  return (
    <Card
      className={`${
        isTall ? 'flex-col' : 'flex-row'
      } ${className} border-gray-600 rounded-lg outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 sm:p-2 gap-4`}
    >
      <CardContent className="pt-4">
        <div className=" aspect-square relative bg-gray-200 rounded-t-lg">
          <img
            src={data.art}
            className=" aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className=" flex-col items-start gap-2">
        <div>
          <p className=" text-xs text-primary/80 space-y-3">
            {' '}
            ${data.blogger} ${data.date_created}
          </p>
          <p className=" font-semibold text-lg">{data.title}</p>
        </div>
      </CardFooter>
    </Card>
  );
}

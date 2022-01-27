import { classNames } from '../../../utils/classNames';

type StackedCardProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  badges: React.ReactNode[];
  src: string;
  className?: string;
};

export function StackedCard({ title, description, badges, src, className }: StackedCardProps ) {

  const badgesComponent = (
    <div className='px-6 pt-4 pb-2'>
      {badges.map((b, index) => (
        <span
          key={index}
          className='cursor-default inline-block text-base-content bg-base-100 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2'
        >
          {b}
        </span>
      ))}
    </div>
  );

  return (
    <div className={classNames(
      'flex flex-col bg-base-300 max-w-sm rounded overflow-hidden shadow-lg height-100',
      className,
    )}>
      <img className='w-full h-[55%] object-cover object-center' src={src} alt='StackedCardImage' />
      <div className='flex-1 px-6 py-4'>
        <div className='font-bold text-xl mb-4'>{title}</div>
        <p className='text-base-content/80 text-base'>
          {description}
        </p>
      </div>
      {badgesComponent}
    </div>
  );

}

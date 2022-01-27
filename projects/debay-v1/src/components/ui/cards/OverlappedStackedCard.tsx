// import { classNames } from '../../../utils/classNames';

type OverlappedStackedCardProps = {
  src: string;
  title: React.ReactNode;
  description: React.ReactNode;
  value: React.ReactNode;
  className?: string;
};

export function OverlappedStackedCard({ src, title, description, value, className }: OverlappedStackedCardProps ) {

  return (

      <div className='max-w-lg m-auto'>

        <img
          src={src}
          alt='stat'
          className='w-full object-cover object-center rounded-lg shadow-md'
        />

        <div className='relative px-4 -mt-16'>

          <div className='stat bg-neutral-content rounded-lg shadow-lg shadow-neutral/40'>

          <div className='stat-figure text-primary'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-8 h-8 stroke-current'>                     
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z'></path>     
            </svg>
          </div> 

            <div className='stat-title text-base-content opacity-75'>{title}</div> 
            <div className='stat-value mb-1'>{value}</div> 
            <div className='stat-desc text-accent opacity-75'>↗︎ 400 (22%)</div>

          </div>

        </div>

      </div>

  );

}

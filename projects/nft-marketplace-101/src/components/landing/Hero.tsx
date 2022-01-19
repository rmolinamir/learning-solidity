import { StackedCard } from '../ui/cards/StackedCard';
import Slider from '../ui/slider/Slider';

const cards: Parameters<typeof StackedCard>[number][] = [
  {
    title: 'The Coldest Sunset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    badges: ['#lorem', '#ipsum'],
    src: 'https://v1.tailwindcss.com/img/card-top.jpg',
  },
  {
    title: 'The Coldest Sunset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    badges: ['#lorem', '#ipsum'],
    src: 'https://v1.tailwindcss.com/img/card-top.jpg',
  },
  {
    title: 'The Coldest Sunset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    badges: ['#lorem', '#ipsum'],
    src: 'https://v1.tailwindcss.com/img/card-top.jpg',
  },
  {
    title: 'The Coldest Sunset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    badges: ['#lorem', '#ipsum'],
    src: 'https://v1.tailwindcss.com/img/card-top.jpg',
  },
  {
    title: 'The Coldest Sunset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    badges: ['#lorem', '#ipsum'],
    src: 'https://v1.tailwindcss.com/img/card-top.jpg',
  },
  {
    title: 'The Coldest Sunset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    badges: ['#lorem', '#ipsum'],
    src: 'https://v1.tailwindcss.com/img/card-top.jpg',
  },
]

export default function Hero() {

  return (
    
    <section className='px-4 py-8 mx-auto max-w-7xl'>

      <div className='w-full mx-auto md:w-11/12 text-center'>

        <h1 className='mb-9 text-4xl font-extrabold leading-snug tracking-normal text-base-content md:text-6xl md:tracking-tight'>
          A decentralized <span className='block w-full text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent lg:inline'>shopping experience</span> for your favorite collectibles.
        </h1>

        <p className='px-0 mb-9 text-lg text-base-content/50 md:text-xl lg:px-24'>
          Searching and buying cryptocollectibles is fast and straightforward. With the Decentralized Asset Exchange you can define your own transaction rules, network fees, gas costs, and governance policies.
        </p>

        <div className='mb-4 space-x-1 md:space-x-2 md:mb-8'>

          <button className='capitalize inline-flex items-center justify-center mb-2 btn btn-primary btn-lg !min-h-min !h-14 !w-40 !sm:w-auto border-2 !border-base-content/20 sm:mb-0'>
            Browse
          </button>

          <button className='capitalize inline-flex items-center justify-center mb-2 btn btn-accent btn-lg !min-h-min !h-14 !w-40 !sm:w-auto border-2 !border-base-content/20 sm:mb-0'>
            Publish
          </button>

        </div>

      </div>

      <div className='mt-24'>

        <h1 className='text-center text-4xl font-semibold leading-tight mb-12 text-base-content'>Newest Collections</h1>

        <div className='relative px-5'>

          <Slider
            breakpoints={{
              sm: {
                slidesPerView: 1,
              },
              md: {
                slidesPerView: 2,
              },
              lg: {
                slidesPerView: 2,
              },
              xl: {
                slidesPerView: 3,
              },
              '2xl': {
                slidesPerView: 3,
              },
            }}
          >
            {cards.map((c, i) => (
              <StackedCard
                key={i}
                className='m-auto'
                title={c.title}
                description={c.description}
                badges={c.badges}
                src={c.src}
              />
            ))}
          </Slider>

        </div>

      </div>

    </section>

  );


}

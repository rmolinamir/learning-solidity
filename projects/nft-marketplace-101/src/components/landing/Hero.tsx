import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { StackedCard } from '../cards/StackedCard';

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

  const prevElement = React.useRef<HTMLButtonElement>(null);
  const nextElement = React.useRef<HTMLButtonElement>(null);
  const swiperRef = React.useRef<SwiperClass | null>(null);

  React.useEffect(() => {

    const swiper = swiperRef.current;

    if (swiper && typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
      // Override prevEl & nextEl now that refs are defined
      swiper.params.navigation.prevEl = prevElement.current;
      swiper.params.navigation.nextEl = nextElement.current;

      // Re-init navigation
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }

  }, [])

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

        <h1 className='text-center text-4xl font-semibold leading-tight mb-12 text-base-content'>Hottest NFTs</h1>

        <div className='relative px-5'>

          <Swiper
            className='!pb-16'
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
              1536: {
                slidesPerView: 3,
              },
            }}
            loop
            loopFillGroupWithBlank
            navigation={{ prevEl: prevElement.current, nextEl: nextElement.current }}
            pagination={{ clickable: true }}
            draggable={false}
            allowTouchMove={false}
            autoplay
            onBeforeInit={swiper => { swiperRef.current = swiper; }}
          >
            {cards.map((c, i) => (
              <SwiperSlide key={i}>
                <StackedCard
                  className='m-auto'
                  title={c.title}
                  description={c.description}
                  badges={c.badges}
                  src={c.src}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className='backdrop-blur bg-neutral-content/40 z-10 absolute top-1/2 left-0 inline-block p-3 rounded-full border border-primary !outline-none' ref={prevElement}>
            <ChevronLeftIcon className='h-5 w-5 text-primary' />
          </button>
          <button className='backdrop-blur bg-neutral-content/40 z-10 absolute top-1/2 right-0 inline-block p-3 rounded-full border border-primary !outline-none' ref={nextElement}>
            <ChevronRightIcon className='h-5 w-5 text-primary' />
          </button>

        </div>

      </div>

    </section>

  );


}

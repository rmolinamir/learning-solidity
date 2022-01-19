import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper as SwiperClass, SwiperOptions } from 'swiper/types';
import { Swiper, SwiperSlide, SwiperProps as ISwiperProps } from 'swiper/react';import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { RequireAtLeastOne } from '../../../common/RequireAtLeastOne';
import { Breakpoint } from '../../../common/Breakpoint';
import { classNames } from '../../../utils/classNames';

interface SliderProps extends Omit<ISwiperProps, 'breakpoints' | 'navigation' | 'onBeforeInit'> {

  /**
   * Allows to set different parameter for different responsive
   * breakpoints (screen sizes). Not all parameters can be changed
   * in breakpoints, only those which are not required different layout
   * and logic, like `slidesPerView`, `slidesPerGroup`, `spaceBetween`,
   * `grid.rows`. Such parameters like `loop` and `effect` won't work.
   */
  breakpoints?: RequireAtLeastOne<{ [key in keyof typeof Breakpoint]?: SwiperOptions }>;

  /**
   * ReactNode that will be automatically set up to function as a navigation
   * button for previous slides.
   */
  prevButton?: React.ReactNode | undefined;

  /**
   * ReactNode that will be automatically set up to function as a navigation
   * button for next slides.
   */
  nextButton?: React.ReactNode | undefined;

}

export default function Slider(props: SliderProps) {

  const {

    className,

    allowTouchMove = false,
    autoplay = true,
    draggable = false,
    loop = true,
    loopFillGroupWithBlank = true,
    modules = [Navigation, Pagination, A11y, Autoplay],
    pagination = { clickable: true },
    spaceBetween = 50,

    breakpoints,

    prevButton,
    nextButton,

    children,

    ...rest

  } = props;

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

  }, []);

  const swiperBreakpoints: ISwiperProps['breakpoints'] = breakpoints
    ? Object.entries(breakpoints).reduce(
      (obj, entry) => {

        const [breakpoint, options] = entry as [keyof typeof Breakpoint, SwiperOptions];

        if (breakpoint) obj[Breakpoint[breakpoint]] = options;

        return obj;

      },
      {} as NonNullable<ISwiperProps['breakpoints']>,
    )
    : undefined;

  const slides = React.Children.map(children, (child, i) => {

    if (isSwiperSlide(child)) return child;

    return (
      <SwiperSlide key={i}>
        {child}
      </SwiperSlide>
    );

  });

  return (

    <div className={classNames('relative px-5', className)}>

      <Swiper

        className='!pb-16'

        allowTouchMove={allowTouchMove}
        autoplay={autoplay}
        draggable={draggable}
        loop={loop}
        loopFillGroupWithBlank={loopFillGroupWithBlank}
        modules={modules}
        pagination={pagination}
        spaceBetween={spaceBetween}

        breakpoints={swiperBreakpoints}

        navigation={{ prevEl: prevElement.current, nextEl: nextElement.current }}
        onBeforeInit={swiper => { swiperRef.current = swiper; }}

        {...rest}

      >
        {slides}
      </Swiper>

      <Slider.PrevButton ref={prevElement}>{prevButton}</Slider.PrevButton>

      <Slider.NextButton ref={nextElement}>{nextButton}</Slider.NextButton>

    </div>

  );

}

type PrevButtonProps = { children?: React.ReactNode | undefined; };

Slider.PrevButton = React.forwardRef<HTMLButtonElement, PrevButtonProps>(function(
  { children = <ChevronLeftIcon className='h-5 w-5 text-primary' /> }, 
  prevButtonRef,
) {

  return (
    <button
      className='backdrop-blur bg-neutral-content/40 z-10 absolute top-1/2 left-0 inline-block p-3 rounded-full border border-primary !outline-none'
      ref={prevButtonRef}
    >
      {children}
    </button>
  );

});

type NextButtonProps = { children?: React.ReactNode | undefined; };

Slider.NextButton = React.forwardRef<HTMLButtonElement, NextButtonProps>(function(
  { children = <ChevronRightIcon className='h-5 w-5 text-primary' /> }, 
  nextButtonRef,
) {

  return (
    <button
      className='backdrop-blur bg-neutral-content/40 z-10 absolute top-1/2 right-0 inline-block p-3 rounded-full border border-primary !outline-none'
      ref={nextButtonRef}
    >
      {children}
    </button>
  );

});

Slider.Slide = SwiperSlide;

function isSwiperSlide(child: React.ReactNode): child is typeof SwiperSlide {

  return React.isValidElement(child) && child.type === SwiperSlide;

}

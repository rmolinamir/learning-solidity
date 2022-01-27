import faker from 'faker';
import { useWeb3 } from '../../contexts/web3/useWeb3';
import { StackedCard } from '../ui/cards/StackedCard';
import Slider from '../ui/slider/Slider';
import { getNftImage } from '../../utils/getNftImage';

export default function NewestNfts() {

  const { state, } = useWeb3();

  const lastFourNfts = state.nftList?.slice(state.nftList.length - 4, state.nftList.length);

  return (

    <>
    
      {state.totalSupply && (

        <section className='mt-24'>

          <h1 className='text-center text-4xl font-semibold leading-tight mb-12 text-base-content'>
            Newest NFTs
          </h1>

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
              {lastFourNfts?.map((nft, i) => (
                <StackedCard
                  key={i}
                  className='m-auto h-full'
                  title={`${faker.commerce.productAdjective()} ${faker.commerce.product()}`}
                  description={faker.commerce.productDescription()}
                  badges={[faker.commerce.productAdjective(), faker.commerce.productAdjective()]}
                  src={getNftImage(nft)}
                />
              ))}
            </Slider>

          </div>

        </section>

      )}
    
    </>

  );


}

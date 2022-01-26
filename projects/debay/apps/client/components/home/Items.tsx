import faker from 'faker';
import { useWeb3 } from '../../contexts/web3/useWeb3';
import { OverlappedStackedCard } from '../ui/cards/OverlappedStackedCard';
import { getNftImage } from '../../utils/getNftImage';

export default function Items() {

  const { state, } = useWeb3();

  return (

    <>
      
      {state.totalSupply && (
        <section className='mt-24'>

          <h1 className='text-center text-4xl font-semibold leading-tight mb-12 text-base-content'>
            {state.totalSupply} items
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16'>

            {state.nftList?.map((nft, i) => (
              <OverlappedStackedCard
                key={i}
                src={getNftImage(nft)}
                title={`${faker.commerce.productAdjective()} ${faker.commerce.product()}`}
                value={faker.commerce.price()}
                description={`↗︎ ${faker.datatype.number(10000)} (${faker.datatype.number(100)}%)`}
              />
            ))}

          </div>

        </section>
      )}
    
    </>

  );


}

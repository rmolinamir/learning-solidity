import type { NextPage } from 'next';
import Hero from '../components/home/Hero';
import Items from '../components/home/Items';
import NewestNfts from '../components/home/NewestNfts';
import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className='px-4 py-8 mx-auto max-w-7xl min-h-[60vh]'>
        <Hero />
        <NewestNfts />
        <Items />
      </main>
      <Footer />
    </>
  );
};

export default Home;

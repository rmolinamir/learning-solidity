import Hero from '../../components/landing/Hero';
import Items from '../../components/landing/Items';
import NewestNfts from '../../components/landing/NewestNfts';
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';

function Landing() {
  return (
    <>
      <Header />
      <main className='px-4 py-8 mx-auto max-w-7xl min-h-screen'>
        <Hero />
        <NewestNfts />
        <Items />
      </main>
      <Footer />
    </>
  );
}

export default Landing;

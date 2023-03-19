import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Product from './components/Product';
import CarouselV2 from './components/CarouselV2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carousel/>

      <div className='prod-container'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>

      <div className='carousel-2'>
        <CarouselV2/>
      </div>

      <div className='prod-container'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Product from './components/Product';
import CarouselV2 from './components/CarouselV2';

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

      
    </div>
  );
}

export default App;

import React from 'react'
import "./Carousel.css"
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";


const CustomLeftArrow = ({ onClick }) => (
    <button className="custom-arrow custom-arrow-left" onClick={onClick}>
        <span class="material-symbols-outlined">
            arrow_back_ios
        </span>
    </button>
  );
  
  const CustomRightArrow = ({ onClick }) => (
    <button className="custom-arrow custom-arrow-right" onClick={onClick}>
      <span class="material-symbols-outlined">
        arrow_forward_ios
     </span>
    </button>
  );

const CarouselBlock = () => {
  return (
    <div className="carousel">
            <Carousel showThumbs={false}  infiniteLoop={true} renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <CustomLeftArrow onClick={onClickHandler} />
                    )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <CustomRightArrow onClick={onClickHandler} />
                    )}> 
                <div style={{ height: "400px", color: "#fff" }}>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                        alt="First slide"
                    />
                </div>
                <div style={{ height: "400px", color: "#fff" }}>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
                        alt="Second slide"
                    />
                </div>
                <div style={{ height: "400px", color: "#fff" }}>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
                        alt="Third slide"
                    />
                </div>
            </Carousel>
    </div>
  )
}

export default CarouselBlock
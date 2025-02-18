import CarouselCard from "../components/CarouselCard.jsx";  // Import CarouselCard
import './component-styles/ProjectCarousel.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <div className="slick-prev" />,  // Custom previous arrow
        nextArrow: <div className="slick-next" />,  // Custom next arrow
        };
    

    return (
        <div className="carousel-container">
        <Slider {...settings}>
          <CarouselCard title="Triton Planning" description="Degree planning tool for UC San Diego students that makes it easier to visualize pathways." img="triton-planning.png"/>
          <CarouselCard title="Socket Surge" description="A workshop aimed at teaching students at UCSD how to get started with WebSocket development." img="triton-planning.png"/>
          <CarouselCard title="GPS Tracker" description="Project developed on an STM32 MCU to create a GPS tracker to attach to lost possessions." img="triton-planning.png"/>
          <CarouselCard title="Triton Planning" description="Degree planning tool for UC San Diego students that makes it easier to visualize pathways" img="triton-planning.png"/>
        </Slider>
      </div>)
};

export default ProjectCarousel

// Carousel.js
import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://raw.githubusercontent.com/manishkumar33p/images/refs/heads/main/New%20India%20Software%20solutions.png",
        "https://raw.githubusercontent.com/manishkumar33p/images/refs/heads/main/New%20India%20Software%20solutions.jpg",
        "https://raw.githubusercontent.com/manishkumar33p/images/refs/heads/main/New%20India%20Software%20solutions%20(1).jpg",
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-o7AR3RA_0r0YUHer7LDr7Tw0WR-uAOHMdQ&s"
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} />
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Carousel;

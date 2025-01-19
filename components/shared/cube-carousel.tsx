'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CarouselBase from './carousel-base';

import hero1 from '@/assets/083.jpg'
import hero2 from '@/assets/098.jpg'
import hero3 from '@/assets/Mora030.jpg'

const images = [
  hero1,
  hero2,
  hero3,
];

const CubeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        <motion.div
          animate={{ rotateY: currentIndex * -90 }}
          transition={{ duration: 0.8 }}
          className="w-4/5 h-4/5 relative preserve-3d"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="absolute inset-0 backface-hidden"
              style={{
                transform: `rotateY(${index * 90}deg) translateZ(50vh)`,
              }}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          ))}
        </motion.div>
      </div>
  );
};

export default CubeCarousel;


'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import hero1 from '@/assets/083.jpg'
import hero2 from '@/assets/098.jpg'
import hero3 from '@/assets/Mora030.jpg'
import CarouselBase from './carousel-base';
import Image from 'next/image';

const images = [
  hero1,
  hero2,
  hero3,
];
const ParallaxCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
      <div className="absolute inset-0 overflow-hidden">
        {images.map((src, index) => (
          <motion.div
            key={index}
            animate={{
              x: `${(index - currentIndex) * 100}%`,
              scale: index === currentIndex ? 1 : 0.8,
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative h-4/5 w-4/5">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </motion.div>
        ))}
      </div>
  );
};

export default ParallaxCarousel;


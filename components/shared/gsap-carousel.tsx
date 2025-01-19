'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

import hero1 from '@/assets/083.jpg'
import hero2 from '@/assets/098.jpg'
import hero3 from '@/assets/Mora030.jpg'

const images = [
  hero1,
  hero2,
  hero3,
];

const GSAPCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const slides = slidesRef.current;
    const totalSlides = slides.length;

    gsap.set(slides, { autoAlpha: 0, scale: 0.8 });
    gsap.set(slides[0], { autoAlpha: 1, scale: 1 });

    const tl = gsap.timeline({ repeat: -1 });

    slides.forEach((slide, index) => {
      tl.to(slide, { autoAlpha: 1, scale: 1, duration: 1 }, index * 5)
        .to(slide, { autoAlpha: 0, scale: 0.8, duration: 1 }, (index + 1) * 5 - 1);
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          ref={(el) => el && (slidesRef.current[index] = el)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative h-4/5 w-4/5">
            <Image
              src={src || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GSAPCarousel;


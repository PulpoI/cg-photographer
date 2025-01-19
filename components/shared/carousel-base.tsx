import React from 'react';
import Image from 'next/image';

interface CarouselBaseProps {
  images: string[];
  children: React.ReactNode;
}

const CarouselBase: React.FC<CarouselBaseProps> = ({ images, children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <div key={index} className="absolute inset-0">
          <Image
            src={src || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
      ))}
      {children}
    </div>
  );
};

export default CarouselBase;

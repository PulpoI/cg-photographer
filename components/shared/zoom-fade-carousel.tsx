"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselBase from "./carousel-base";

import hero1 from "@/assets/083.jpg";
import hero2 from "@/assets/098.jpg";
import hero3 from "@/assets/Mora030.jpg";
import Image from "next/image";

const images = [hero1, hero2, hero3];

const ZoomFadeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Slide ${currentIndex + 1}`}
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
          quality={100}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ZoomFadeCarousel;

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./gallery-ring.module.css";
import image1 from '@/assets/_DSC3555.jpg';
import image2 from '@/assets/098.jpg';
import image3 from '@/assets/Bauti083.jpg';
import image4 from '@/assets/_DSC3556.jpg';
import image5 from '@/assets/Mora015.jpg';
import image6 from '@/assets/DSC_5599.jpg';

const IMAGES = [image1, image2, image3, image4, image5, image6];

const GalleryRing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const autoRotationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!containerRef.current || !ringRef.current) return;

    const ring = ringRef.current;
    const images = imagesRef.current;

    // Configuración inicial
    gsap.set(ring, { rotationY: 360 });

    gsap.set(images, {
      rotateY: (i) => i * -60,
      transformOrigin: "50% 50% 1000px",
      z: -1000,
      backgroundImage: (i) => `url(${IMAGES[i].src})`,
      backgroundPosition: (i) => getBgPos(i),
      backfaceVisibility: "hidden",
    });

    // Animación inicial de entrada
    gsap.from(images, {
      duration: 1.5,
      y: 200,
      opacity: 0,
      stagger: 0.1,
      ease: "expo",
      onComplete: () => {
        gsap.set(images, { y: 0, opacity: 1 });
        startAutoRotation();
      },
    });

    function startAutoRotation() {
      if (autoRotationRef.current) autoRotationRef.current.kill();

      autoRotationRef.current = gsap.to(ring, {
        rotationY: "+=360",
        duration: 30,
        ease: "none",
        repeat: -1,
        onUpdate: () => {
          gsap.set(images, { 
            backgroundPosition: (i) => getBgPos(i),
            force3D: true
          });
        },
      });
    }

  }, []);


  

  function getBgPos(i: number) {
    if (!ringRef.current) return "0px 0px";
    return (
      100 -
      (gsap.utils.wrap(
        0,
        360,
        (gsap.getProperty(ringRef.current, "rotationY") as number) -
          180 -
          i * 60
      ) /
        360) *
        800 +
      "px 0px"
    );
  }

  return (
    <div className={styles["gallery-stage"]}>
      <div className={styles["gallery-container"]} ref={containerRef}>
        <div className={styles["gallery-ring"]} ref={ringRef}>
          {IMAGES.map((_, i) => (
            <div
              key={i}
              className={styles["gallery-img"]}
              ref={(el) => {
                if (el) imagesRef.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryRing;

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./gallery-ring.module.css";

const GalleryRing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const autoRotationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!containerRef.current || !ringRef.current) return;

    const ring = ringRef.current;
    const images = imagesRef.current;

    let xPos = 0;
    let isDragging = false;

    // Configuración inicial
    gsap.set(ring, { rotationY: 180, cursor: "grab" });

    gsap.set(images, {
      rotateY: (i) => i * -36,
      transformOrigin: "50% 50% 500px",
      z: -500,
      backgroundImage: (i) =>
        `url(https://picsum.photos/id/${i + 32}/600/400/)`,
      backgroundPosition: (i) => getBgPos(i),
      backfaceVisibility: "hidden",
    });

    // Animación inicial de entrada
    gsap.from(images, {
      duration: 1.5,
      y: 200,
      opacity: 1,
      stagger: 0.1,
      ease: "expo",
      onComplete: () => {
        startAutoRotation();
        gsap.set(images, { y: 0 });
      },
    });

    // Función para iniciar la rotación automática
    function startAutoRotation() {
      if (autoRotationRef.current) autoRotationRef.current.kill();

      autoRotationRef.current = gsap.to(ring, {
        rotationY: "+=360",
        duration: 20,
        ease: "none",
        repeat: -1,
        onUpdate: () => {
          gsap.set(images, { backgroundPosition: (i) => getBgPos(i) });
        },
      });
    }

    // Función para detener la rotación automática
    function stopAutoRotation() {
      if (autoRotationRef.current) {
        autoRotationRef.current.pause();
      }
    }

    const dragStart = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      stopAutoRotation();
      if ("touches" in e && e.touches[0]) {
        xPos = e.touches[0].clientX;
      } else if ("clientX" in e) {
        xPos = e.clientX;
      }
      gsap.set(ring, { cursor: "grabbing" });
      document.addEventListener("mousemove", drag);
      document.addEventListener("touchmove", drag);
    };

    const drag = (e: MouseEvent | TouchEvent) => {
      let clientX;
      if ("touches" in e && e.touches[0]) {
        clientX = e.touches[0].clientX;
      } else if ("clientX" in e) {
        clientX = e.clientX;
      } else {
        return;
      }

      gsap.to(ring, {
        rotationY: "-=" + ((Math.round(clientX) - xPos) % 360),
        onUpdate: () => {
          gsap.set(images, { backgroundPosition: (i) => getBgPos(i) });
        },
      });
      xPos = Math.round(clientX);
    };

    const dragEnd = () => {
      isDragging = false;
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("touchmove", drag);
      gsap.set(ring, { cursor: "grab" });
      startAutoRotation();
    };

    // Event listeners
    ring.addEventListener("mousedown", dragStart);
    ring.addEventListener("touchstart", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("touchend", dragEnd);

    return () => {
      if (autoRotationRef.current) autoRotationRef.current.kill();
      ring.removeEventListener("mousedown", dragStart);
      ring.removeEventListener("touchstart", dragStart);
      document.removeEventListener("mouseup", dragEnd);
      document.removeEventListener("touchend", dragEnd);
    };
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
          i * 36
      ) /
        360) *
        500 +
      "px 0px"
    );
  }

  return (
    <div className={styles["gallery-stage"]}>
      <div className={styles["gallery-container"]} ref={containerRef}>
        <div className={styles["gallery-ring"]} ref={ringRef}>
          {[...Array(10)].map((_, i) => (
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

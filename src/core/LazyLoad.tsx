import React, { useState, useEffect, useRef } from "react";

interface LazyLoadProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

const LazyLoad: React.FC<LazyLoadProps> = ({
  src,
  alt,
  className = "",
  placeholder = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isInView && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [isInView, src]);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={isInView ? src : placeholder || undefined}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: isLoaded ? "100ms" : "0ms" }}
      />
    </div>
  );
};

export default LazyLoad;

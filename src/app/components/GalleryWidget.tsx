'use client';

import { useState } from 'react';
import { useRef, useEffect } from 'react';

export default function GalleryWidget() {
  const [images, setImages] = useState([
    { id: 1, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', alt: 'Unsplash Forest' },
    { id: 2, src: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=400&q=80', alt: 'Unsplash Mountains' },
    { id: 3, src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', alt: 'Unsplash Lake' },
    { id: 4, src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80', alt: 'Unsplash City' },
    { id: 5, src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80', alt: 'Unsplash Bridge' }
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isAnimating, setIsAnimating] = useState(false);
  const totalVisible = 3;

  // For scrolling animation
  const transitionStyle = {
    transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
    willChange: 'transform',
  };
  const galleryRef = useRef(null);

  // Wrap indices for infinite scrolling
  const getVisibleImages = () => {
    const result = [];
    for(let i=0; i<totalVisible; ++i) {
      result.push(images[(currentImageIndex + i) % images.length]);
    }
    return result;
  };

  const handleAddImage = () => {
    const newImage = {
      id: images.length + 1,
      src: '/images/building.jpg',
      alt: `Gallery Image ${images.length + 1}`
    };
    setImages([...images, newImage]);
  };

  const handlePreviousImage = () => {
    if (isAnimating) return;
    setDirection(-1);
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
    setIsAnimating(true);
  };

  const handleNextImage = () => {
    if (isAnimating) return;
    setDirection(1);
    setCurrentImageIndex(prev => (prev + 1) % images.length);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Amount to shift for animation: image+gap
  const translateDistance = 190 + 24;

  // The wrap div
  // removed useEffect for keyframes

  return (
    <div className="w-full max-w-[720px] rounded-[23px] p-6 relative" style={{ height: '330px', boxShadow: '5.67px 5.67px 3.78px 0px #00000066', backdropFilter: 'blur(4px)', background: 'linear-gradient(180deg, #303439 0%, #161718 100%)' }}>
      {/* Question mark icon */}
      <img
        src="/images/qustionmark.png"
        alt="?"
        className="absolute"
        style={{ top: '24px', left: '16px', width: '20px', height: '20px', objectFit: 'contain' }}
      />

      {/* Center 6-square box */}
      <div className="absolute" style={{ width: '24px', height: '30.68783187866211px', borderRadius: '2.33px', opacity: 1, top: '50%', left: '16px', transform: 'translateY(-50%)' }}>
        <div className="grid grid-cols-2" style={{ gap: '1.38px' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ width: '9.312169075012207px', height: '9.312169075012207px', borderRadius: '1.16px', opacity: 1, transform: 'rotate(0deg)', background: 'rgba(255, 255, 255, 0.12)' }} />
          ))}
        </div>
      </div>

      {/* Gallery title pill */}
       <div
          className="absolute flex items-center justify-center"
          style={{ width: '149px', height: '62px', borderRadius: '20px', top: '17px', left: '53px', opacity: 1, background: '#171717', transform: 'rotate(0deg)', boxShadow: '0px 4px 10px 2px #00000040 inset' }}
        >
          <span className="text-white text-xl font-medium font-poppins">Gallery</span>
        </div>

      {/* Header controls aligned with Gallery pill */}
      <div className="absolute flex items-center gap-3" style={{ top: '17px', right: '53px', height: '62px' }}>
        <div className="flex items-center gap-3">
          {/* Add Image Button */}
          <button
            onClick={handleAddImage}
            style={{
              width: '131.32px',
              height: '46px',
              borderRadius: '104px',
              transform: 'rotate(0deg)',
              opacity: 1,
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(104.56px)',
              boxShadow: '0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15) inset, 0px 0px 48.91px 0px rgba(255, 255, 255, 0.05) inset, 9px 10px 7.1px 0px rgba(0, 0, 0, 0.4), -0.5px -0.5px 6.9px 0px rgba(255, 255, 255, 0.25)'
            }}
            className="transition-all duration-300 button-press hover-lift flex items-center justify-center"
          >
            <span className="text-white text-sm font-medium">+ ADD IMAGE</span>
          </button>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button 
              onClick={handlePreviousImage}
              className="w-11 h-11 bg-gradient-to-br from-[#303439] to-[#161718] rounded-full shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,1)] flex items-center justify-center hover:shadow-[6px_7px_35px_7px_rgba(16,18,19,1),-7px_-5px_35px_-12px_rgba(150,190,231,1)] transition-all duration-300 button-press hover-lift"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#6F787C]">
                <path d="M8.75 1.75L3.5 7L8.75 12.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              onClick={handleNextImage}
              className="w-11 h-11 bg-gradient-to-br from-[#303439] to-[#161718] rounded-full shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,1)] flex items-center justify-center hover:shadow-[6px_7px_35px_7px_rgba(16,18,19,1),-7px_-5px_35px_-12px_rgba(150,190,231,1)] transition-all duration-300 button-press hover-lift"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#6F787C]">
                <path d="M5.25 1.75L10.5 7L5.25 12.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Image Grid - Horizontal scrollable */}
      <div
        className="absolute"
        style={{
          top: '110px',
          left: '7.36%', // align with gallery title relative to container
          opacity: 1,
          width: '85.28%', // match outer container proportion (3*190 + 2*22) of 720px
          height: '179px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0',
          justifyContent: 'flex-start',
        }}
      >
        <div
          ref={galleryRef}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '22px', // slightly less gap for better fit
            transform: isAnimating
              ? `translateX(${direction === 1 ? -212 : 212}px)` // 190+22 (image+gap)
              : 'translateX(0px)',
            transition: isAnimating ? 'transform 0.4s cubic-bezier(0.4,0,0.2,1)' : 'none',
          }}
        >
          {getVisibleImages().map((image, index) => (
            <div
              key={image.id + '_' + index}
              className="gallery-img-container"
              style={{
                width: '190px',
                height: '179px',
                borderRadius: '24px',
                opacity: 1,
                transform: 'rotate(0deg)',
                overflow: 'hidden',
                background: '#23242A',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.16)',
                position: 'relative'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px', filter: 'grayscale(1)', transition: 'filter 0.3s, transform 0.3s' }}
                className="gallery-image-bw"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Lines */}
      {/* Decorative line removed; now handled at page layout */}
      <style>{`
.gallery-img-container:hover img {
  filter: grayscale(0) !important;
  transform: scale(1.08);
  z-index: 2;
  box-shadow: 0 8px 28px 0px rgba(75,130,255,0.25);
}
.gallery-img-container img {
  filter: grayscale(1);
  transition: filter 0.3s, transform 0.3s;
}
`}</style>
    </div>
  );
}

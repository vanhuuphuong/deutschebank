"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import PageLayout from '../components/PageLayout';

const pages = Array.from({ length: 26 }, (_, i) => ({
  image: `/deutschebank/page${i + 1}.png`,
  alt: `Page ${i + 1}`,
}));

export default function Home() {
  const bookRef = useRef<any>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const goToPrev = () => {
    if (bookRef.current && bookRef.current.pageFlip) {
      bookRef.current.pageFlip().flipPrev();
    }
  };
  const goToNext = () => {
    if (bookRef.current && bookRef.current.pageFlip) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const handleZoomChange = (scale: number) => {
    setZoomScale(scale);
    if (bookRef.current) {
      bookRef.current.style.transform = `scale(${scale})`;
      bookRef.current.style.transformOrigin = "center center";
      bookRef.current.style.transition = "transform 0.3s ease";
    }
  };

  return (
    <PageLayout goToPrev={goToPrev} goToNext={goToNext} handleZoomChange={handleZoomChange}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: '100vh', padding: '32px 0' }}>
        <HTMLFlipBook
          ref={bookRef}
          width={600}
          height={1000}
          size="stretch"
          minWidth={500}
          maxWidth={1600}
          minHeight={800}
          maxHeight={2000}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          style={{
            boxShadow: '0 4px 32px rgba(0,0,0,0.15)',
            transform: `scale(${zoomScale})`,
            transformOrigin: 'center center',
            transition: 'transform 0.3s ease',
          }}
          className={''}
          startPage={0}
          drawShadow={false}
          usePortrait={false}
          startZIndex={0}
          autoSize={false}
          clickEventForward={false}
          useMouseEvents={false}
          swipeDistance={0}
          showPageCorners={false}
          disableFlipByClick={false}
          flippingTime={1000}
        >
          {pages.map((page, idx) => (
            <div key={idx} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
              <img
                src={page.image}
                alt={page.alt}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </PageLayout>
  );
}

'use client';

import { useState } from 'react';
import ProfileWidget from './components/ProfileWidget';
import GalleryWidget from './components/GalleryWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#373E44] to-[#191B1F] flex items-center justify-center p-8">
      {/* Main Container - Responsive for laptop screens */}
      <div className="relative overflow-hidden" style={{ 
        width: '100%', 
        maxWidth: '1728px', 
        height: '895px', 
        borderRadius: '28px', 
        opacity: 1,
        background: 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)',
        boxShadow: '10px 10px 40px 10px #00000080'
      }}>
        {/* Left Rectangle - Responsive for screens above 768px */}
        <div className="absolute" style={{
          width: '48%',
          height: '77.5%',
          borderRadius: '27px',
          opacity: 1,
          top: '10.73%',
          left: '2%',
          background: '#616161D1',
          border: '1px solid #96BEE7'
        }}>
          {/* Left side content area - intentionally left empty */}
        </div>
        {/* Right side widgets positioned responsively using percentage-based offsets */}
        <div className="absolute w-full h-full">
          {/* Profile Widget - responsive positioning */}
          <div className="absolute" style={{ width: '41.67%', maxWidth: '720px', height: 'auto', top: '10.73%', left: '53.36%' }}>
            <ProfileWidget />
          </div>
          {/* Gallery Widget - responsive positioning */}
          <div className="absolute" style={{ width: '41.67%', maxWidth: '720px', height: 'auto', top: '50.6%', left: '53.36%', opacity: 1 }}>
            <GalleryWidget />
          </div>
          {/* Decorative line under ProfileWidget */}
          <div
            className="absolute"
            style={{
              width: '35.42%',
              height: '4px',
              borderRadius: '2.46px',
              opacity: 1,
              top: '48.4%',
              left: '56.5%',
              transform: 'rotate(0deg)',
              background:
                'linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
            }}
          />
          {/* Decorative line under GalleryWidget - matches first widget */}
          <div
            className="absolute"
            style={{
              width: '35.42%',
              height: '4px',
              borderRadius: '2.46px',
              opacity: 1,
              top: '88.83%',
              left: '56.5%',
              transform: 'rotate(0deg)',
              background:
                'linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
            }}
          />
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import ProfileWidget from './components/ProfileWidget';
import GalleryWidget from './components/GalleryWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#373E44] to-[#191B1F] flex items-center justify-center p-8">
      {/* Main Container - Exact Figma specs */}
      <div className="relative overflow-hidden" style={{ 
        width: '1728px', 
        height: '895px', 
        borderRadius: '28px', 
        opacity: 1,
        background: 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)',
        boxShadow: '10px 10px 40px 10px #00000080'
      }}>
        {/* Left Rectangle - Exact Figma specs */}
        <div className="absolute" style={{
          width: '836px',
          height: '689px',
          borderRadius: '27px',
          opacity: 1,
          top: '98px',
          left: '29px',
          background: '#616161D1',
          border: '1px solid #96BEE7'
        }}>
          {/* Left side content area - intentionally left empty */}
        </div>
        
        {/* Right side widgets with exact Figma positioning */}
        <div className="absolute w-full h-full">
          {/* Profile Widget - exact Figma position */}
          <div className="absolute" style={{ width: '720px', height: '316px', top: '96px', left: '922px' }}>
            <ProfileWidget />
          </div>
          
          {/* Gallery Widget - exact Figma position */}
          <div className="absolute" style={{ width: '720px', height: '330px', top: '453px', left: '922px', opacity: 1 }}>
            <GalleryWidget />
          </div>
          {/* Decorative line under widgets per provided specs */}
          <div
            className="absolute"
            style={{
              width: '612px',
              height: '4px',
              borderRadius: '2.46px',
              opacity: 1,
              top: '433px',
              left: '976px',
              transform: 'rotate(0deg)',
              background:
                'linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
            }}
          />
          {/* Decorative line under GalleryWidget - matches first widget */}
          <div
            className="absolute"
            style={{
              width: '612px',
              height: '4px',
              borderRadius: '2.46px',
              opacity: 1,
              top: '795px', // 453 + 330 + 12 (some gap below): tweak if needed for perfect alignment
              left: '976px',
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

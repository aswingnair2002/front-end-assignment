'use client';

import { useState } from 'react';

export default function ProfileWidget() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ];

  return (
    <div className="w-[720px] h-[316px] bg-[#363C43] rounded-[18.89px] p-6 relative" style={{ boxShadow: '5.67px 5.67px 3.78px 0px #00000066', backdropFilter: 'blur(4px)' }}>
      {/* Question mark icon */}
      <img
        src="/images/qustionmark.png"
        alt="?"
        className="absolute top-6 left-6"
        style={{ width: '20px', height: '20px', objectFit: 'contain' }}
      />

      {/* Center 6-square box */}
      <div className="absolute" style={{ width: '24px', height: '30.68783187866211px', borderRadius: '2.33px', opacity: 1, top: '50%', left: '24px', transform: 'translateY(-50%)' }}>
        <div className="grid grid-cols-2" style={{ gap: '1.38px' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ width: '9.312169075012207px', height: '9.312169075012207px', borderRadius: '1.16px', opacity: 1, transform: 'rotate(0deg)', background: 'rgba(255, 255, 255, 0.12)' }} />
          ))}
        </div>
      </div>

      {/* Tab Navigation - Figma rounded container */}
      <div className="absolute" style={{ width: '614px', height: '62px', top: '17px', left: '53px', opacity: 1, borderRadius: '23px', background: '#171717', boxShadow: '0px 4.96px 12.4px 2.48px #00000040 inset' }}>
        <div className="flex h-full items-center justify-between px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2.5 rounded-2xl text-lg font-medium transition-all duration-300 font-poppins tab-transition button-press flex-1 mx-1 ${
                activeTab === tab.id
                  ? 'text-white bg-[#28292F] shadow-[13.49px_16.87px_67.47px_8.43px_rgba(10,10,10,1),-8.43px_-16.87px_50.6px_-16.87px_rgba(72,91,113,1)]'
                  : 'text-[#A3ADB2] hover:text-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(39,39,40,0.49)] to-[rgba(150,190,231,0.24)] rounded-2xl -z-10 animate-fade-in" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="absolute overflow-y-auto pr-2" style={{
        width: '611px',
        height: '175px',
        top: '114px',
        left: '53px', // align with wrapped/tabs section
        opacity: 1
      }}>
        {activeTab === 'about' && (
          <div style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#969696'
          }} className="animate-slide-in">
            <p className="mb-4">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            </p>
            <p className="mb-4">
              I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </div>
        )}
        
        {activeTab === 'experiences' && (
          <div className="text-[#969696] text-xl leading-[1.26] font-normal font-plus-jakarta-sans animate-slide-in">
            <p className="mb-4">
              With 3 years at Salesforce, I've helped over 200+ clients optimize their sales processes and increase revenue by an average of 35%.
            </p>
            <p>
              Previously worked in enterprise software sales for 5 years, specializing in CRM implementations and sales automation solutions.
            </p>
          </div>
        )}
        
        {activeTab === 'recommended' && (
          <div className="text-[#969696] text-xl leading-[1.26] font-normal font-plus-jakarta-sans animate-slide-in">
            <p className="mb-4">
              I highly recommend Salesforce's Sales Cloud for businesses looking to streamline their sales processes and improve team collaboration.
            </p>
            <p>
              For small businesses, I suggest starting with Salesforce Essentials, which provides all the core features at an affordable price point.
            </p>
          </div>
        )}
      </div>

      {/* Decorative Lines */}
      {/* Curved Rectangle - right center, scrollbar size with shadow */}
      <div
        className="absolute"
        style={{
          width: '8px',
          height: '64px',
          borderRadius: '6px',
          top: '50%',
          left: 'calc(100% - 24px)',
          transform: 'translateY(-50%)',
          background:
            'linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          boxShadow: '4px 4px 4.9px 0px #00000040',
          opacity: 1,
        }}
      />
      {/* Decorative line removed; now handled at page layout */}
    </div>
  );
}

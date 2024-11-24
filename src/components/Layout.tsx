import React from 'react';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();

  const isMobile = window.innerWidth < 768;
  const orgId = 'org_2oYYvseCKAv7nUsIly4MHwN5Wv0';

  return (
    <>
      <Navbar />
      {children}

      <div
        className="fixed bottom-0 right-0"
        style={{ width: isMobile ? '100%' : '27rem', height: isMobile ? '100%' : '37rem', zIndex: 1000 }}
      >
        <iframe
          src={`https://pandy-bot.vercel.app?orgId=${orgId}&deviceType=${isMobile ? 'mobile' : 'desktop'}`}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          id="myIframe"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

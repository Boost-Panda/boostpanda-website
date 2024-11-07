import React from 'react';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();

  return (
    <>
      <Navbar />
      {children}

      <div className="fixed bottom-0 right-0" style={{ width: '27rem', height: '37rem', zIndex: 1000 }}>
        <iframe
          src="https://pandy-bot.vercel.app"
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

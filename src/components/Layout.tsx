import React from 'react';

import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
};

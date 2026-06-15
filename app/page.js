'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { PostscriptSection } from '@/components/sections/postscript-section';
import { ProgramSection } from '@/components/sections/program-section';
import { RSVPSection } from '@/components/sections/rsvp-section';
import { SiteNav } from '@/components/site-nav';
import { content } from '@/lib/content';

export default function Home() {
  const [language, setLanguage] = useState('pl');
  const dict = content[language];

  return (
    <div className="page-shell">
      <SiteNav language={language} onToggleLanguage={() => setLanguage((current) => (current === 'pl' ? 'en' : 'pl'))} dict={dict} />
      <main>
        <HeroSection dict={dict} />
        <ProgramSection dict={dict} />
        <RSVPSection dict={dict} />
        <PostscriptSection dict={dict} />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Antonina x Piotr</p>
          <a href="/assets/invitation.pdf" target="_blank" rel="noreferrer">
            {dict.footerInvite}
          </a>
        </div>
      </footer>
    </div>
  );
}

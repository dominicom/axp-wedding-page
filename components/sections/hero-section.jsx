'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { H1, P } from '@/components/ui/typography';

// Note: Warsaw uses CEST (UTC+2) on 2026-09-19, so +02:00 is correct for that date.
const ceremonyDate = new Date('2026-09-19T15:03:00+02:00');


function getTimeLeft() {
  const now = new Date();
  const diff = Math.max(0, ceremonyDate.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: String(Math.floor(totalSeconds / 86400)).padStart(2, '0'),
    hours: String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, '0'),
    minutes: String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0'),
    seconds: String(totalSeconds % 60).padStart(2, '0')
  };
}

export function HeroSection({ dict }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero section" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Badge className="mb-4">{dict.heroEyebrow}</Badge>
          <H1 posterShadow>
            Antonina <span>{`×`}</span> Piotr
          </H1>
          <P posterShadow className="hero-lede">{dict.heroLede}</P>

          <div className="countdown" aria-label="Odliczanie do ceremonii">
            <div>
              <strong className="text-shadow-poster">{timeLeft.days}</strong>
              <span className="text-shadow-poster">{dict.countdownDays}</span>
            </div>
            <div>
              <strong className="text-shadow-poster">{timeLeft.hours}</strong>
              <span className="text-shadow-poster">{dict.countdownHours}</span>
            </div>
            <div>
              <strong className="text-shadow-poster">{timeLeft.minutes}</strong>
              <span className="text-shadow-poster">{dict.countdownMinutes}</span>
            </div>
            <div>
              <strong className="text-shadow-poster">{timeLeft.seconds}</strong>
              <span className="text-shadow-poster">{dict.countdownSeconds}</span>
            </div>
          </div>

          <div className="hero-actions">
            <Button asChild variant="primary" size="lg" className="shadow-poster">
              <a href="#rsvp">{dict.heroCta}</a>
            </Button>
            <Button asChild size="lg">
              <a href="#program">{dict.heroSecondary}</a>
            </Button>
          </div>
        </div>

        <div className="hero-art" aria-label="Ilustracje Antoniny i Piotra">
          <img className="paper-bg" src="/assets/bg2.jpg" alt="" />
          <img className="person person-left" src="/assets/art1.png" alt="Antonina" />
          <img className="person person-right" src="/assets/art2.png" alt="Piotr" />
          <div className="date-stamp">
            <span>19</span>
            <span>09</span>
            <span>26</span>
          </div>
        </div>
      </div>
    </section>
  );
}

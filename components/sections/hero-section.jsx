'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ceremonyDate = new Date('2026-09-19T15:00:00+02:00');

function getTimeLeft() {
  const now = new Date();
  const diff = Math.max(0, ceremonyDate.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: String(Math.floor(totalSeconds / 86400)).padStart(3, '0'),
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
          <h1>
            Antonina <span>x</span> Piotr
          </h1>
          <p className="hero-lede">{dict.heroLede}</p>

          <div className="countdown" aria-label="Odliczanie do ceremonii">
            <div>
              <strong>{timeLeft.days}</strong>
              <span>{dict.countdownDays}</span>
            </div>
            <div>
              <strong>{timeLeft.hours}</strong>
              <span>{dict.countdownHours}</span>
            </div>
            <div>
              <strong>{timeLeft.minutes}</strong>
              <span>{dict.countdownMinutes}</span>
            </div>
            <div>
              <strong>{timeLeft.seconds}</strong>
              <span>{dict.countdownSeconds}</span>
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

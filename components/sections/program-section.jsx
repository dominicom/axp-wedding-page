import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { H2, P } from '@/components/ui/typography';

export function ProgramSection({ dict }) {
  return (
    <section className="section" id="program">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{dict.programEyebrow}</p>
          <H2 posterShadow className="decoration-(--paper)">{dict.programTitle}</H2>
        </div>

        <div className="event-grid">
          <Card className="event-card shadow-poster">
            <span className="event-part">{dict.ceremonyPart}</span>
            <h3>{dict.ceremonyTitle}</h3>
            <p className="event-time">15:00</p>
            <p>{dict.ceremonyCopy}</p>
            <div className="map-preview" aria-hidden="true">
              <span>Bazylika</span>
            </div>
            <Button asChild variant="secondary">
              <Link href="https://www.google.com/maps/search/?api=1&query=Bazylika+pw.+%C5%9Bw.+Wincentego+a+Paulo+Bydgoszcz" target="_blank" rel="noreferrer">
                {dict.mapsCta}
              </Link>
            </Button>
          </Card>

          <Card className="event-card shadow-poster event-card-accent">
            <span className="event-part">{dict.partyPart}</span>
            <h3>{dict.partyTitle}</h3>
            <p className="event-time">Szosa Bydgoska 9 · Żołędowo</p>
            <p>{dict.partyCopy}</p>
            <div className="map-preview map-preview-party" aria-hidden="true">
              <span>Gazdówka</span>
            </div>
            <Button asChild variant="secondary">
              <Link href="https://www.google.com/maps/search/?api=1&query=Karczma+Gazd%C3%B3wka+Szosa+Bydgoska+9+%C5%BBo%C5%82%C4%99dowo" target="_blank" rel="noreferrer">
                {dict.mapsCta}
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

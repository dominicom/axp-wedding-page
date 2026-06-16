import { Card } from '@/components/ui/card';
import { H2, H3, P } from '@/components/ui/typography';

export function RSVPSection({ dict }) {
  return (
    <section className="section rsvp-section" id="rsvp">
      <div className="container rsvp-grid">
        <div>
          <p className="eyebrow text-shadow-poster">{dict.rsvpEyebrow}</p>
          <H2 posterShadow>{dict.rsvpTitle}</H2>
          <P>{dict.rsvpCopy}</P>
        </div>

        <div className="contact-list">
          <Card className="contact-card">
            <img src="/assets/art1.png" alt="" />
            <div>
              <h3>Antonina</h3>
              <p>{dict.contactCopy}</p>
            </div>
          </Card>

          <Card className="contact-card">
            <img src="/assets/art2.png" alt="" />
            <div>
              <h3>Piotr</h3>
              <p>{dict.contactCopy}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

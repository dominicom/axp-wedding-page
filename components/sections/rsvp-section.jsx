import { Card } from '@/components/ui/card';

export function RSVPSection({ dict }) {
  return (
    <section className="section rsvp-section" id="rsvp">
      <div className="container rsvp-grid">
        <div>
          <p className="eyebrow">{dict.rsvpEyebrow}</p>
          <h2>{dict.rsvpTitle}</h2>
          <p>{dict.rsvpCopy}</p>
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

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SiteNav({ language, onToggleLanguage, dict }) {
  return (
    <header className="site-header" data-header>
      <div className="header-bg" aria-hidden="true">
        <Link href="#hero" className="brand" aria-label="Antonina i Piotr">
          <span>A</span>
          <span className="brand-cross">{`×`}</span>
          <span>P</span>
        </Link>

        <nav className="main-nav" aria-label="Główne">
          <a href="#program">{dict.navProgram}</a>
          <a className="nav-cta" href="#rsvp">
            {dict.navConfirm}
          </a>
          <a href="#post-scriptum">{dict.navPost}</a>
          {/* <a href="#rsvp">{dict.navRsvp}</a> */}
        </nav>

        <Button type="button" className="language-toggle" onClick={onToggleLanguage}>
          {language === 'pl' ? 'English' : 'Polski'}
        </Button>
      </div>
    </header>
  );
}

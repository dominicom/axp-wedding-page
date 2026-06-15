export function PostscriptSection({ dict }) {
  return (
    <section className="section post-section" id="post-scriptum">
      <div className="container">
        <div className="marquee" aria-hidden="true">
          <span>Antonina x Piotr · 19.09.2026 ·</span>
          <span>Antonina x Piotr · 19.09.2026 ·</span>
        </div>
        <blockquote className="poster-quote shadow-poster">{dict.postQuote}</blockquote>
      </div>
    </section>
  );
}

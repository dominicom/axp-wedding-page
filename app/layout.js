import './globals.scss';

export const metadata = {
  title: 'Antonina & Piotr | 19.09.2026',
  description: 'Wedding landing page inspired by a retro poster and modern editorial storytelling.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

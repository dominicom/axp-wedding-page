import './globals.css';

export const metadata = {
  title: 'Antonina x Piotr | 19.09.2026',
  description: 'Wedding landing page inspired by a retro poster and modern editorial storytelling.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}

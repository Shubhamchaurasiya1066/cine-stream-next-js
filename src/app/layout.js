import './globals.css';

export const metadata = {
  title: 'CineStream Ultra',
  description: 'Premium Movie Streaming Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
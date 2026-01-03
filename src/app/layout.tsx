import type { Metadata } from 'next';
import { Libre_Caslon_Text } from 'next/font/google';
import './globals.css';

const libreCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quality Landscapes - Laurel',
  description: 'Transform your outdoor space with Laurel. Award-winning landscape design that elevates your property\'s beauty and value. Book your free consultation today.',
  icons: {
    icon: '/imgs/Laurel-icon-leaf.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libreCaslon.className}>
        {children}
      </body>
    </html>
  );
}

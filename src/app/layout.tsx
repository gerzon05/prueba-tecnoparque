import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Pokemones',
  description:
    'Puedes ver todos los Pokemones y seleccionar para generar una batalla',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <main className="min-h-screen">
          <Toaster position="bottom-right" />
          {children}
        </main>
      </body>
    </html>
  );
}

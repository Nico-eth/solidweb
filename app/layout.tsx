import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Solid Marketing - Developing & Marketing Services',
  description: 'A reliable platform offering professional cryptocurrency software and marketing solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 
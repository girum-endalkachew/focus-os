import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FocusOS — Operating System for Deep Work',
  description: 'Minimalist glassmorphic productivity dashboard with Pomodoro timers, soundscapes, and analytics.',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FocusOS', 'Pomodoro', 'Deep Work'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#050808] text-[#F4F7F3] selection:bg-[#B8FF3D] selection:text-[#050808]">
        {children}
      </body>
    </html>
  );
}

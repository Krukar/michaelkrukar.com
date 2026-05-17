import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
    title: 'Krukar',
    description: 'New Media Artist / Full Stack Engineer',
};

import '@Styles';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon.ico" sizes="any" />

            <body className="custom-scrollbar">
                {children}
                <Analytics />
            </body>
        </html>
    );
}

import type { Metadata } from 'next';

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

            <body className="custom-scrollbar">{children}</body>
        </html>
    );
}

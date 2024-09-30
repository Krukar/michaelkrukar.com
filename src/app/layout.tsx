import type { Metadata } from 'next';

import '@Styles';

export const metadata: Metadata = {
    title: 'Krukar',
    description: 'Full Stack Consultant/New Media Artist',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}

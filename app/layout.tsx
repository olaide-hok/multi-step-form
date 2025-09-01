import type {Metadata} from 'next';
import {Ubuntu} from 'next/font/google';
import './globals.css';

const ubuntuSans = Ubuntu({
    variable: '--font-ubuntu-sans',
    weight: ['400', '500', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'A Multi Step Form',
    description: 'A Multi Step Form',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${ubuntuSans.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}

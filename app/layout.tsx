import '@base/styles/globals.css';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '@components/navbar';
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({ subsets: ['latin'], display: 'swap', weight: '400' });

export const metadata = {
    title: 'Movie.io',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={poppins.className}>
                <NextTopLoader color='red' showSpinner={false} />
                <Navbar />
                {children}
            </body>
        </html>
    );
}

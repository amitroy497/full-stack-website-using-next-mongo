import type { Metadata } from 'next';

import { mulish } from '@/utils/font';

import Footer from './components/Footer';
import Header from './components/Header';

import './globals.css';

export const metadata: Metadata = {
	title: 'Full Stack Website',
	description: 'Full Stack Website Using Next Mongo Database',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={mulish.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}

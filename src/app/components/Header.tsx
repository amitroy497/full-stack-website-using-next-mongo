import Image from 'next/image';
import Link from 'next/link';

import Nav from './Nav';

import styles from '@/app/styles/navbar.module.css';

const Header = () => {
	return (
		<header className={styles.main_header}>
			<div className={styles.navbar_brand}>
				<Link href='/'>
					<Image src='/logo.png' alt='' width={150} height={40}></Image>
				</Link>
			</div>
			<Nav />
		</header>
	);
};

export default Header;

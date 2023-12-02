'use client';

import { useState } from 'react';

import ContactForm from './ContactForm';
import ContactFormWithServerActions from './ContactFormWithServerActions';

import styles from '@/app/styles/combined.module.css';

const CombinedForm = () => {
	const [serverSideDataBase, setServerSideDataBase] = useState<boolean>(false);
	return (
		<div className={styles.container}>
			<button
				disabled={serverSideDataBase ? false : true}
				onClick={() => setServerSideDataBase(false)}
				className={`${!serverSideDataBase && styles.btndisabled}`}
			>
				Client Side Post Operation
			</button>
			<button
				disabled={serverSideDataBase ? true : false}
				onClick={() => setServerSideDataBase(true)}
				className={`${serverSideDataBase && styles.btndisabled}`}
			>
				Server Side Post Operation
			</button>
			{serverSideDataBase ? <ContactFormWithServerActions /> : <ContactForm />}
		</div>
	);
};

export default CombinedForm;

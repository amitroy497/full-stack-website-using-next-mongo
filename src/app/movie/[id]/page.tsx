import { FC } from 'react';
import Image from 'next/image';

import styles from '@/app/styles/common.module.css';

interface MoviePageProps {
	params: {
		id: string;
	};
}

const MoviePage: FC<MoviePageProps> = async ({ params }) => {
	const id = params.id;
	const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '10b11e14f9msh715b9d659490928p1c7287jsn052d359bb4fd',
			'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
		},
	};

	const response = await fetch(url, options);
	const data = await response.json();
	const mainData = data[0]?.details;

	return (
		<div className={styles.container}>
			<h2 className={styles.movie_title}>
				Netflix \ <span> {mainData?.type} </span>{' '}
			</h2>
			<div className={styles.card_section}>
				<div>
					<Image
						src={mainData?.backgroundImage.url}
						alt={mainData?.title}
						width={600}
						height={300}
					/>
				</div>
				<div>
					<h1>{mainData?.title}</h1>
					<p>{mainData?.synopsis}</p>
				</div>
			</div>
		</div>
	);
};

export default MoviePage;

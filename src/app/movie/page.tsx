import MovieCard from '../components/MovieCard';

import styles from '@/app/styles/common.module.css';

const Movie = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const url = `${process.env.URL}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '10b11e14f9msh715b9d659490928p1c7287jsn052d359bb4fd',
			'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
		},
	};

	const response = await fetch(url, options);
	const mainData = await response.json();

	return (
		<>
			<section className={styles.movieSection}>
				<div className={styles.container}>
					<h1>Series & Movies</h1>
					<div className={styles.card_section}>
						{mainData?.titles?.map((curElem: any) => {
							return (
								<MovieCard
									key={curElem?.id}
									id={curElem?.jawSummary?.id}
									type={curElem?.jawSummary?.type}
									title={curElem?.jawSummary?.title}
									synopsis={curElem?.jawSummary?.synopsis}
									image={curElem?.jawSummary?.backgroundImage?.url}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Movie;

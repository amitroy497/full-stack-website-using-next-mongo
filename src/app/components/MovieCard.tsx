import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/styles/common.module.css';

interface MovieCardProps {
	id: number;
	type: string;
	title: string;
	synopsis: string;
	image: string;
}
const MovieCard: FC<MovieCardProps> = ({
	id,
	type,
	title,
	synopsis,
	image,
}) => {
	return (
		<>
			{image.length !== 0 && (
				<div className={styles.card}>
					<div className={styles.card_image}>
						<Image src={image} alt={title} width={260} height={200} />
					</div>
					<div className={styles.card_data}>
						<h2>{title?.substring(0, 18)}</h2>
						<p>{`${synopsis?.substring(0, 66)} ...`}</p>
						<Link href={`/movie/${id}`}>
							<button>Read More</button>
						</Link>
					</div>
				</div>
			)}
		</>
	);
};

export default MovieCard;

import classes from './Carousel.module.css';
import Image from 'next/image';
import { ImageSrc } from '../Data/Images';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const MyCarousel: React.FC = () => {
	const [width, setWidth] = useState(0);
	const carouselRef = useRef<any>();

	useEffect(() => {
		setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
	}, []);

	return (
		<div className={classes.container}>
			<motion.div
				className={classes.carousel}
				ref={carouselRef}
				whileTap={{ cursor: 'grabbing' }}
			>
				<motion.div
					drag='x'
					dragConstraints={{ right: 0, left: -width }}
					className={classes.inner_carousel}
				>
					{ImageSrc.map((image) => {
						return (
							<motion.div key={Math.random()} className={classes.item}>
								<Image
									src={image.image}
									alt='painting'
									loading='lazy'
									className={classes.image}
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default MyCarousel;

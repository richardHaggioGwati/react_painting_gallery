import classes from './HomeSlider.module.css';
import Link from 'next/link';

const HomeSlider: React.FC = () => {
	return (
		<div className={classes.container}>
			<div className={`${classes.slide} ${classes.slide1}`}></div>
			<div className={`${classes.slide} ${classes.slide2}`}></div>
			<div className={`${classes.slide} ${classes.slide3}`}></div>
			<div className={`${classes.slide} ${classes.slide4}`}></div>

			<h1 className={classes.header}>Ape_Lee - Paintings</h1>

			<Link href='/about'>
				<button className={classes.button}>
					<p className={classes.button_text}>Enter</p>
				</button>
			</Link>
		</div>
	);
};

export default HomeSlider;

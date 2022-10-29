import classes from './ScrollingImage.module.css';

const ScrollingImage: React.FC = () => {
	return (
		<div className={classes.container}>
			<div className={classes.fixed_image}>
				<div className={classes.bode}>
					<h2>
						Lorem ipsum dolor <br/>sit amet, consectetur<br/> adipiscing elit.
					</h2>
				</div>
			</div>
		</div>
	);
};

export default ScrollingImage;

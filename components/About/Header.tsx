import classes from './Header.module.css';

const Header: React.FC = () => {
	return (
		<div className={classes.container}>
			<div className={classes.image_container}>Image Container</div>
			
            <div className={classes.overflowing_container}>
				<div className={classes.overflowing_text_single_container}>
					<p className={classes.overflowing_text}>Lorem ipsum dolor</p>
				</div>
				<div className={classes.overflowing_text_single_container}>
					<p className={classes.overflowing_text}>sit, amet consectetur adipisicing</p>
                </div>
                <div className={classes.overflowing_text_single_container}>
					<p className={classes.overflowing_text}>eatae enim, quisquam eos, doloremque fugit</p>
				</div>
            </div>
            
		</div>
	);
};

export default Header;

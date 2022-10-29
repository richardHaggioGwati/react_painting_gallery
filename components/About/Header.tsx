import classes from './Header.module.css';
import Image from 'next/image';

import mandela from '../../public/116272033_108453384199240_8799507240059188282_n.jpg'

const Header: React.FC = () => {
	return (
		<div className={classes.container}>
			<div className={classes.image_container}>
			<Image
						src={mandela}
						alt='mandela painting'
						layout='responsive'
						width={1080}
						height={1080}
					/>
			</div>
			
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

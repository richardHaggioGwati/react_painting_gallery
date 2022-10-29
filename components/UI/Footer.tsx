import classes from './Footer.module.css';

import Image from 'next/image';
import Link from 'next/link';

import facebook from '../../public/Icons/facebook.svg';
import twitter from '../../public/Icons/twitter.svg';
import instagram from '../../public/Icons/instagram.svg';

const Footer: React.FC = () => {
	return (
		<div className={classes.footer_container}>
            <div className={classes.footer_icon}>
				<Link href='https://www.facebook.com/'>
					<Image
						src={facebook}
						alt='facebook'
						layout='responsive'
						width={32}
						height={32}
					/>
				</Link>
            </div>
            
			<div className={classes.footer_icon}>
				<Link href='https://www.facebook.com/'>
					<Image
						src={instagram}
						alt='instagram'
						layout='responsive'
						width={32}
						height={32}
					/>
				</Link>
            </div>
            
			<div className={classes.footer_icon}>
				<Link href='https://www.facebook.com/'>
					<Image
						src={twitter}
						alt='twitter'
						layout='responsive'
						width={32}
						height={32}
					/>
				</Link>
            </div>
		</div>
	);
};

export default Footer;

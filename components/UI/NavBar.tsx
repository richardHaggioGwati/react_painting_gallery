import classes from './NavBar.module.css';
import Link from 'next/link';
import MobileNav from './MobileNav';

const NavBar: React.FC = () => {
	return (
		<div className={classes.nav}>
			<Link href='/'>
				<a className={classes.nav_header}>Ape_Lee</a>
			</Link>

			<div className={classes.nav_links}>
				<Link href='/about'>
					<a
						className={`${classes.nav_link} ${classes.hover_underline_animation}`}
					>
						About
					</a>
				</Link>
				<Link href='/gallery'>
					<a
						className={`${classes.nav_link} ${classes.hover_underline_animation}`}
					>
						Gallery
					</a>
				</Link>
			</div>
			<MobileNav />
		</div>
	);
};

export default NavBar;

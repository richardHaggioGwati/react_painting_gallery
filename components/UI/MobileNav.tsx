import classes from './MobileNav.module.css';
import { useState } from 'react';
import Link from 'next/link';

const MobileNav = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive(!isActive);
	};

	return (
		<header className={classes.mobile}>
			<button
				onClick={toggleActive}
				className={`${classes.hamburger} ${isActive ? classes.active : ''}`}
			>
				<div className={classes.bar}></div>
			</button>
			<div className={` ${classes.grey_background} ${isActive ? classes.active : ''}`} onClick={toggleActive}></div>
			<nav
				className={`${classes.mobile_nav} ${isActive ? classes.active : ''}`}
			>
				<Link href='/about'>
					<a
						className={`${classes.nav_link} ${classes.hover_underline_animation}`}
					>
						About
					</a>
				</Link>
				<hr className={classes.line}></hr>
				<Link href='/gallery'>
					<a
						className={`${classes.nav_link} ${classes.hover_underline_animation}`}
					>
						Gallery
					</a>
				</Link>
			</nav>
		</header>
	);
};

export default MobileNav;
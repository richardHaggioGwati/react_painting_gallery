import type { NextPage } from 'next';
import Footer from '../components/UI/Footer';
import NavBar from '../components/UI/NavBar';
import Carousel from '../components/Gallery/Carousel';
import MobileImageScroll from '../components/Gallery/MobileImageScroll';

const Gallery: NextPage = () => {
	return (
		<div>
			<>
				<NavBar />
				<Carousel />
				<MobileImageScroll/>
				<Footer />
			</>
		</div>
	);
};

export default Gallery;

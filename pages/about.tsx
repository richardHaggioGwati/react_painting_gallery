import type { NextPage } from 'next';
import Footer from '../components/UI/Footer';
import NavBar from '../components/UI/NavBar';
import Header from '../components/About/Header';
import ScrollingImage from '../components/About/ScrollingImage';
import PersonalInormation from '../components/About/PersonalInormation';

const About: NextPage = () => {
	return (
		<>
			<NavBar />
			<Header />
			<PersonalInormation />
			<ScrollingImage />
			<Footer />
		</>
	);
};

export default About;

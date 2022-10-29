import classes from './PersonalInormation.module.css';
import Image from 'next/image';

import selfProtraite from '../../public/310375309_188868670283407_8033659358404913512_n.jpg';

const PersonalInormation: React.FC = () => {
	return (
		<div className={classes.personal_container}>
			<div className={classes.personal_text_container}>
				<h3>Lorem</h3>
				<h3>Ipsum</h3>
				<div className={classes.personal_information_background}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis omnis
					vel hic adipisci, expedita itaque atque dolores doloribus aperiam
					eveniet repudiandae id. Dolores amet commodi libero modi fugit
					exercitationem deserunt. Architecto numquam vitae hic. Sapiente, illo
					ab? Optio aut voluptatum ullam quod rerum in, saepe, officia assumenda
					ipsam nam libero dicta veritatis harum alias autem impedit aliquid
					recusandae blanditiis! Tenetur?
				</div>
			</div>

			<div className={classes.personal_image_container}>
				<Image
					src={selfProtraite}
					alt='mandela painting'
					layout='responsive'
					width={1080}
					height={1080}
				/>
			</div>
		</div>
	);
};

export default PersonalInormation;

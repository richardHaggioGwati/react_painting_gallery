import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Art Gallery</title>
				<meta name='author' content='R.G' />
				<link rel='icon' href='/King.png' />
				<meta
					name='description'
					content='Art gallery for app_lee_painting'
				/>
				<meta name='keywords' content='art, painting, app_lee_paiting' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

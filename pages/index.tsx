import { Layout } from '../layout/Layout';
import { MainPage } from '../layout/Home/Home';

export default function Home(): JSX.Element {
	return (
		<Layout
			title='Bee Haak'
			description='Productos De miel.'
		>
			<MainPage />
		</Layout>
	);
}

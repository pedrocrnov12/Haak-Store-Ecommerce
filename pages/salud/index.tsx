import { FC } from 'react';
import { Layout } from '../../layout/Layout';
import Catalog from '../../components/UI/Catalog/Catalog';
import { products } from '../../data/products.data';

const RollsPage: FC = () => {
	return (
		<Layout title='salud' description='rico'>
			<Catalog
				products={products.filter((product) => product.category === 'salud')}
			></Catalog>
		</Layout>
	);
};

export default RollsPage;

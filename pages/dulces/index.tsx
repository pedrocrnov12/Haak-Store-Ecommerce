import { FC } from 'react';
import { Layout } from '../../layout/Layout';
import Catalog from '../../components/UI/Catalog/Catalog';
import { products } from '../../data/products.data';

const SushiPage: FC = () => {
	return (
		<Layout title='dulce' description='dulce'>
			<Catalog
				products={products.filter((product) => product.category === 'dulce')}
			></Catalog>
		</Layout>
	);
};

export default SushiPage;

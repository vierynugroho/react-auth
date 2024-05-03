import { useState, useEffect } from 'react';
import Button from '../components/Elements/Button';
import CardProduct from '../components/Fragments/CardProduct';
import { getProducts } from '../services/product';

const ProductPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts((data) => {
			setProducts(data);
		});
	}, []);

	return (
		<>
			<div className='flex justify-end h-12 bg-blue-600 sticky top-0 text-white items-center px-10'>
				<Button
					type='button'
					classname='ml-5 bg-black'
				>
					Logout
				</Button>
			</div>

			<div className='flex flex-wrap justify-center min-h-screen items-center mt-5'>
				{products.length > 0 &&
					products.map((product) => (
						<CardProduct key={product.id}>
							<CardProduct.Header image={product.image} />
							<CardProduct.Body title={product.title}>{product.description}</CardProduct.Body>
							<CardProduct.Footer price={product.price}></CardProduct.Footer>
						</CardProduct>
					))}
			</div>
		</>
	);
};

export default ProductPage;

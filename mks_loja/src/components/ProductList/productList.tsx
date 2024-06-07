import React from 'react';
import { useQuery } from 'react-query';
import { QueryParams } from '@/src/interfaces/QueryParams.interface';
import { Product } from '@/src/interfaces/Product.interface';
import { fetchProducts } from '@/src/data';
import ProductCart from '../ProductCard/productCard';
import { ProductListStyled } from './productListStyle';


const Products = ({ page, rows, sortBy, orderBy }: QueryParams) => {
  const { data, error, isLoading } = useQuery(
    ['products_list', { page, rows, sortBy, orderBy }],
    fetchProducts
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Failed </div>;

  return (
    <ProductListStyled>
      <ul>
        {data.products.map((product: Product)  => (
          <li key={product.id}><ProductCart name={product.name} description={product.description} photo={product.photo} price={product.price} id={product.id}/></li>
        ))}
      </ul>
    </ProductListStyled>
  );
};

export default Products;

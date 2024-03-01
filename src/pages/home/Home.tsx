import { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import useDebounce from '../../utilities/useDebounce';
import { useInfiniteQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { searchProducts } from './search_products_query';
import { getAllProducts } from './products_query';
import { useInView } from 'react-intersection-observer';
import Product from '../../components/Product/Product';
import SearchBar from '../../components/SearchBar/SearchBar';
import { type TProduct } from '../../store/types';

const Home = () => {
  const [searchQuery, setSetSearchQuery] = useState<string>('');
  const debouncedSearch = useDebounce(searchQuery);

  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [debouncedSearch],
      queryFn: ({ pageParam }) =>
        debouncedSearch
          ? searchProducts(debouncedSearch)
          : getAllProducts(pageParam),
      initialPageParam: 10,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        const totalPages = lastPage.total;
        const currentNumberOfPages = lastPage.limit;
        return totalPages > currentNumberOfPages
          ? lastPageParam + 10
          : undefined;
      },
    });

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  function onChangeHandle(e) {
    setSetSearchQuery(e.target.value)
  }

  return (
    <div style={{ marginTop: 200, height: 'auto' }}>
      {error && <p>Error: Could not fetch.</p>}
      <Grid centered>
        <SearchBar searchQuery={searchQuery} onChangeHandle={onChangeHandle} />
      </Grid>
      <Grid columns={4} centered style={{ marginTop: 50 }}>
        {isLoading && <LoadingSpinner />}
        {data &&
          data.pages[data.pages.length - 1].products.map(
            (product: TProduct) => (
              <Product
                key={product.id}
                id={product.id}
                images={product.images[0]}
                title={product.title}
                description={product.description}
                price={product.price}
                brand={product.brand}
                ref={ref}
              />
            ),
          )}
      </Grid>
    </div>
  );
};

export default Home;

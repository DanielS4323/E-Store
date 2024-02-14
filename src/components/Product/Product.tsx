import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from 'semantic-ui-react';
import { Product } from '../../store/types';

const Product = ({
  id,
  thumbnail,
  title,
  description,
  price,
  brand,
}: Product) => {
  return (
    <Link to={`/${id}`}>
      <Card key={id}>
        <Image src={thumbnail} wrapped />
        <CardContent>
          <CardHeader>{brand}</CardHeader>
          <CardMeta>
            <span>{title}</span>
          </CardMeta>
          <CardDescription>{description}</CardDescription>
          <CardMeta>{price}</CardMeta>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Product;

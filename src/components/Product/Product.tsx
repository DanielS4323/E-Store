import { Link } from 'react-router-dom';
import { Card, Grid, Image } from 'semantic-ui-react';
import { TProduct } from '../../store/types';
import { forwardRef } from 'react';

const Product = forwardRef(
  ({ id, images, title, description, price, brand }: TProduct, ref) => {
    return (
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Card.Group centered style={{ margin: 10 }}>
          <Link to={`/${id}`}>
            <Card link key={id}>
              <Image size="small" centered src={images} wrapped />
              <Card.Content>
                <Card.Header>{brand}</Card.Header>
                <Card.Meta>
                  <h3>{title}</h3>
                </Card.Meta>
                <Card.Description>{description}</Card.Description>
                <Card.Meta>${price}</Card.Meta>
                <div ref={ref}></div>
              </Card.Content>
            </Card>
          </Link>
        </Card.Group>
      </Grid.Column>
    );
  },
);
export default Product;

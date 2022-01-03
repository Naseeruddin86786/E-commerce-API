import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { buttonClasses, CardActionArea } from '@mui/material';
import { style } from '@mui/system';
import "./products.css";

function ProductCard(props) {
    const { product } = props;
  return (
    <Card sx={{ maxWidth: 335, margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
        />
        <CardContent className="content">
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" component="text.secondary">
            Price:$ {product.price}
          </Typography>
          <Typography variant="h6" component="div">
            Ratingss: {product.rating.rate}
          </Typography>
          <Typography><button className="button" onClick={() => props.addToCart(product)} > Add to cart </button></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default ProductCard;
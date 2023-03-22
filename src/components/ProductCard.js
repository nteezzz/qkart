import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
  
  <CardMedia>
<img src={product.image} alt={product.name} height={250} />
  </CardMedia>
  <CardContent>
    {product.name}
    <Typography>${product.cost}</Typography>
    <Rating name="simple-controlled" value={product.rating} readOnly />
    
    <Button
      className="card-button"
      variant="contained"
      onClick={handleAddToCart}
    >
    Add to Cart
      <AddShoppingCartOutlined />
    
    </Button>
    
  </CardContent>

</Card>

  );
};

export default ProductCard;

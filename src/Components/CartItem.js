import React from "react"
import {Button, CardBody,CardImg,CardText,CardTitle,Card} from "reactstrap"


const CartItem=({product,addInCart})=>{
return(
<Card className="mt-2 mb-1">
 <CardImg 
 top
 height="250"
 width="100%"
 src={product.smallImage}/>
 <CardBody className="text-center">
 <CardTitle>{product.productName}</CardTitle>
 <CardText className="secondary">
       Price: Rs {product.productPrice}
 </CardText>
 <Button color="success" onClick={()=>addInCart(product)}>Buy Now</Button>
 </CardBody>
</Card>
);
};

export default CartItem
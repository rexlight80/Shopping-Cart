import React from "react"
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row

} from "reactstrap"

const Cart=({cartItem,removeItem,buyNow})=>{
    let amount = 0;
    cartItem.forEach(function(item) {
        amount= parseFloat(amount)+ parseFloat(item.productPrice);
    });
 return(
     <Container fluid>
    <h1 className="text-success text-center ">Your cart</h1>
    <ListGroup>
    {cartItem.map(item =>{
        return (<ListGroupItem key={item.id}>
        <Row>
        <Col>
        <img height={80} src={item.tinyImage}/>
        </Col>
        <Col className="text-center">
        <div className="text-primary">
        {item.productName}
        </div>
        <span>Price: {item.productPrice}</span>
        <Button color="danger" onClick={()=>removeItem(item)}>Remove</Button>
        
        </Col>
        </Row>
        </ListGroupItem>)
    })};
    
    </ListGroup>
     {cartItem.length >=1 ? (<Card className="text-center mt-3">
        <CardHeader>
        Grand Total
        </CardHeader>
        <CardBody>
        Your amount for {cartItem.length} product is {amount}
        </CardBody>
        <CardFooter>
        <Button color="success" onClick={buyNow}>Pay here</Button>
        </CardFooter>
        </Card> ):(<h1 className="text-danger text-center">Cart is Empty</h1>)}
     </Container>
     
     
 );
};


export default Cart;


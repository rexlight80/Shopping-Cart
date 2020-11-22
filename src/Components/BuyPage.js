import React,{useState,useEffect} from "react"
import axios from "axios"
import {random,commerce} from "faker"
import {Container,Col,Row} from "reactstrap"
import CartItem from "./CartItem"

const apikey="INSERT YOUR KEY HERE"
const url="https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const loacalurl="http://shoppingcart.free.beeceptor.com/"


const BuyPage=({addInCart})=>{
    const [product,setProduct]=useState([])
    // const fetchPhotos=async ()=>{
    //   const response=await Axios.get(url,{
    //       headers:{
    //           Authorization:apikey
    //       }
          
    //   })
    // }
   

      useEffect(()=>{
          fetchPhotos()
      },[])

      const fetchPhotos=async ()=>{
        const {data}=await axios.get(loacalurl)
      

      const {photos}= data

      const allProducts= photos.map(photo=>(
          {
              smallImage:photo.src.medium,
              tinyImage:photo.src.tiny,
              productName:random.word(),
              productPrice:commerce.price(),
              id:random.uuid()
          }
      ))

      setProduct(allProducts)
        }
    return(
        
        <Container fluid>
    <h1 className="text-center text-success">Buy Page</h1>
    <Row>
    {product.map(product=>{
       return( <Col key={product.id} md={4}>
        <CartItem  product={product} addInCart={addInCart}/>
        </Col>)
        
    })}
    </Row>
    </Container>)

}

export default BuyPage;
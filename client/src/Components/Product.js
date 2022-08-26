import { useDispatch } from "react-redux";


import {ADD} from "../Redux/Actions/action"
import styled from "styled-components";
const Product = () => {
  const products = [
    {
      id: 1,
      title: "Tshirt",
      description: "best quality ever, pure cotton",
      price: "2000",
      offer: "1200",
      image:
        "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "check shirt",
      description: "best quality ever, pure cotton",
      price: "3000",
      offer: "2000",
      image:
        "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Slim Fit Jeans",
      description: "best quality ever, very comfortable",
      price: "2500",
      offer: "1500",
      image:
        "https://n1.sdlcdn.com/imgs/i/7/p/Cliths-Brown-Slim-Jeans-SDL261336682-1-0f59c.jpg",
    },
    {
      id: 4,
      title: "Rolex",
      description: "best quality & unique",
      price: "4,50,000",
      offer: "3,00,000",
      image:
        "https://images.pexels.com/photos/9981133/pexels-photo-9981133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Cool Sunglasses",
      description: "best quality ever, very comfortable",
      price: "2500",
      offer: "2000",
      image:
        "https://images.pexels.com/photos/5766156/pexels-photo-5766156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Over sized T-shirt",
      description: "best quality ever, very comfortable",
      price: "5500",
      offer: "4000",
      image:
        "https://images.pexels.com/photos/9558699/pexels-photo-9558699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      title: "nike Air max",
      description: "best quality ever, very comfortable",
      price: "4500",
      offer: "2500",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      title: "Adidas  ",
      description: "best quality ever, very comfortable",
      price: "5000",
      offer: "3200",
      image:
        "https://images.pexels.com/photos/6540947/pexels-photo-6540947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];


const dispatch = useDispatch()
const sendData=(e)=>{
  console.log(e)
  dispatch(ADD(e))
}

const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-wrap: wrap;
margin-bottom:75%;
`
const Card = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  min-width: 250px;
  /* border: 1px solid rgb(247, 242, 242); */
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  margin: 0 40px 30px 40px;
  overflow: hidden;
  padding: 20px;
`
const CardHeader = styled.div`
overflow: hidden;
height: 300px;
width: 250px;
`
const  Image=styled.img`
width: 100%;
object-fit: cover;
`
const Offer_Price=styled.span`
text-decoration: line-through;
`
const Button = styled.button`
border: none;
border-radius: 5px;
height: 40px;
width: 200px;
letter-spacing: 3px;
color: #fff;
background-color: #1565c0;
border-radius: 10px;
margin-top: 20px;
`
  return (
    <>
      <Container>
        {products.map((prod) => (
          <Card key={prod.id}>
            <CardHeader>
              <img src={prod.image} alt="showImage" style={{width: "100%"}}/>
            </CardHeader>
            <div className="card_body">
              <h2> {prod.title} </h2>
              <p> {prod.description}.</p>
              <p>
                <b> Price : ₹ {prod.offer} </b>
                <Offer_Price> ₹ {prod.price}</Offer_Price>
              </p>
            </div>
            <div className="card_footer">
              <Button onClick={()=>sendData(prod)}>
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </Button>
            </div>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Product;

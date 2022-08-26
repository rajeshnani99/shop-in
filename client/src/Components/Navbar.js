import React from 'react'
import styled from "styled-components"

import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"

import { useSelector } from 'react-redux';

const Container = styled.div`
height:60px;
background-color:white;
`
const Wrapper = styled.div`

margin:10px;
display:flex;
justify-content:space-between;
align-items:center;

`

 const Left= styled.div`
 flex:1;
 display:flex;
 align-items:center;
 
 `
 ;
 const Center= styled.div`
 flex:1;
 text-align:center
 `;
 const Right= styled.div`
 flex:1;
 display:flex;
 align-items:center;
 justify-content:flex-end;
 `;




const Logo = styled.h1`
font-weight:bolder;
`

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
&:hover .Home{
    color:yellow;
   }
`

const Navbar = () => {
  const getCartData = useSelector((state) => state.cartReducer.carts);
  return (
    <Container>
    
      <Wrapper>
        <Left>
        <Link to="/" className="Home"style={{ textDecoration: 'none',fontSize:"20px",fontWeight:"bolder" }}>Home</Link>
       
       
        </Left>
        <Center><Logo>SHOPIN</Logo></Center>
        <Right>
        <MenuItem> <Link to="/Product" style={{ textDecoration: 'none' ,fontSize:"20px",fontWeight:"bolder"}}>Products</Link></MenuItem>
            <MenuItem><Link to="/Register" style={{ textDecoration: 'none' ,fontSize:"20px",fontWeight:"bolder"}}>Register</Link></MenuItem>
            <MenuItem>  <Link to="/Login" style={{ textDecoration: 'none',fontSize:"20px" ,fontWeight:"bolder"}}>Login</Link></MenuItem>
            <MenuItem>  <Link to="/BestSeller" style={{ textDecoration: 'none',fontSize:"20px",fontWeight:"bolder" }}>BestSeller</Link></MenuItem>

           
            <MenuItem>
            <Badge  badgeContent={getCartData && (
                    <span className="item_count">{getCartData.length}</span>
                  )}  
                 
                 color="primary">
            
  <Link to="/Cart"> 

  <ShoppingCartOutlinedIcon /></Link>

</Badge>
            </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

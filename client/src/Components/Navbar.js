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
 &:hover .Home{
  border: 8px solid;
  border-image: repeating-linear-gradient(135deg,#F8CA00 0 10px,#E97F02 0 20px,#BD1550 0 30px) 8;
  -webkit-mask: 
    conic-gradient(from 180deg at top 8px right 8px, #0000 90deg,#000 0)
     var(--_i,200%) 0  /200% var(--_i,8px) border-box no-repeat,
    conic-gradient(at bottom 8px left  8px,  #0000 90deg,#000 0)
     0   var(--_i,200%)/var(--_i,8px) 200% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat;
  transition: .3s, -webkit-mask-position .4s .4s;
  

 }

 
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
&:hover .Link{
  border: 8px solid;
  border-image: repeating-linear-gradient(135deg,#F8CA00 0 10px,#E97F02 0 20px,#BD1550 0 30px) 8;
  -webkit-mask: 
    conic-gradient(from 180deg at top 8px right 8px, #0000 90deg,#000 0)
     var(--_i,200%) 0  /200% var(--_i,8px) border-box no-repeat,
    conic-gradient(at bottom 8px left  8px,  #0000 90deg,#000 0)
     0   var(--_i,200%)/var(--_i,8px) 200% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat;
  transition: .3s, -webkit-mask-position .4s .4s;
   }
`

const Navbar = () => {
  const getCartData = useSelector((state) => state.cartReducer.carts);
  return (
    <Container>
    
      <Wrapper>
        <Left>
        <Link to="/" className="Home" style={{ textDecoration: 'none',fontSize:"20px",fontWeight:"bolder" }}>Home</Link>
       
       
        </Left>
        <Center><Logo>SHOPIN</Logo></Center>
        <Right>
        <MenuItem> <Link to="/Product" className='Link'  style={{ textDecoration: 'none' ,fontSize:"20px",fontWeight:"bolder"}}>Products</Link></MenuItem>
            <MenuItem><Link to="/Register" className='Link' style={{ textDecoration: 'none' ,fontSize:"20px",fontWeight:"bolder"}}>Register</Link></MenuItem>
            <MenuItem>  <Link to="/Login"  className='Link' style={{ textDecoration: 'none',fontSize:"20px" ,fontWeight:"bolder"}}>Login</Link></MenuItem>
            <MenuItem>  <Link to="/BestSeller"  className='Link'style={{ textDecoration: 'none',fontSize:"20px",fontWeight:"bolder" }}>BestSeller</Link></MenuItem>

           
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

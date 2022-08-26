import React from 'react'
import styled from 'styled-components'
const Container =styled.div`
height:30px;
background-color:lightgreen;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500px;


`

export default function Announcement() {
  return <Container>
     <h5>Super deal sunday 50% off</h5>
  </Container>
}

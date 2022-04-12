import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Filter({search,setSearch}) {
  console.log(search)
  return (
    <div>
         <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <span style={{color:'white',marginRight:'10px'}}>search</span>
    <input type="text" value={search} onChange={(e)=>(setSearch(e.target.value))}/>
    </Container>
  </Navbar>
    </div>
  )
}

export default Filter
import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import '../components/MainScreen.css'

const MainScreen = ({titles,children}) => {
  return (
    <div className='mainback'>
        <Container>
            <Row>
                <div className='page'>
                   {
                        titles && ( <>
                           <h1 className='heading'>{titles}</h1>
                           <hr/>
                        </>
                   )}
                   {children}
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default MainScreen
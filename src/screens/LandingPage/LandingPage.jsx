import React,{useEffect} from 'react'
import '../LandingPage/LandingPage.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';


const LandingPage = ({history}) => {
//   useEffect(()=>{
//  const userInfo =  localStorage.getItem('userInfo');

//  if(userInfo){
//      history.push("/register");
//  }
// },[history]);


  return (
    <div className='main'>
        <Container>
            <Row>
               <div className='intro-text'>
                  <div >
                    <h1 className='title'>Welcome to your note book</h1>
                    <p className='subtitle'>One safe place for all your notes</p>
                  </div>
                  <div className='buttonContainor'>
                    <a href='/login'>
                        <Button size='lg' className='landingButton'>Login</Button>
                    </a>
                        <a href='/register'>
                        <Button 
                        size='lg' 
                        className='landingButton'
                        variant='outline-primary'
                        >
                            SignUp
                        </Button>
                    </a>
                  </div>
               </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage
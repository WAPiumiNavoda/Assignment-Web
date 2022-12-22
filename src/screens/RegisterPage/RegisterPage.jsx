import React, { useState } from 'react'
import MainScreen from '../../components/MainScreen'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ErrorMessage from '../../components/ErrorMessage';
import axios from 'axios';
import Loarding from '../../components/Loarding';

const RegisterPage = () => {

 //useStates
 const [email,setEmail] = useState("");
 const [name,setName]= useState("");
 const [pic,setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
 const [password,setPassword]= useState("");
 const [confirmpassword,setConfirmPassword]= useState("");
 const [message,setMessage]= useState(null);
 const [picMessage,setPicMessage]= useState(null);
 const [error,setError]=useState(false);
 const [loading,setLoading] = useState(false);

 const registerHandler= async (e)=>{
   e.preventDefault();
//    console.log(email);
if(password !==confirmpassword){
    setMessage('Password Do not Match');
}else{
  setMessage(null)
  try {
    const config = {
        headers:{
            "Content-type":"application/json"
        },
    };
    setLoading(true);
    const { data } = await axios.post(
        "/api/users",
        {name,pic,email,password},
        config
    );
    setLoading(false);
    localStorage.setItem("useInfo",JSON.stringify(data));
  } catch (error) {
    setError(error.response.data.message);
  }
}
 }

  return (
    <>
      <MainScreen title="REGISTER" >
        <h1>REGISTER</h1>
        <hr />
    {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
      {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
      {loading && <Loarding />}
     <Form onSubmit={registerHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" 
         value={name}
        onChange={(e)=> setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email"
         value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password"
         value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
      </Form.Group>

      
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Enter confirmed Password"
         value={confirmpassword}
        onChange={(e)=> setConfirmPassword(e.target.value)}
        />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="image/png" placeholder="uploard image" custom
         value={pic}
        onChange={(e)=> setPic(e.target.value)}
        />
      </Form.Group>

      {/* <Form.Group as={Row}>
     <Form.File
          type="image/png"
           className="custom-file-label"
           id="inputGroupFile01"
           label="Upload Boundary File"
           custom
      />
    </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </MainScreen>
    </>
  )
}

export default RegisterPage
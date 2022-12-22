import React ,{useEffect, useState}from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
// import notes, {} from '../../Data/notes'
import axios from 'axios';


export const MyNotes = () => {

  const [notes, setNotes] = useState([]);

  const deleteHandler = (id)=>{
     if(window.confirm("Are you sure?")){

     }
  }

   const fetchNotes = async() =>{
    const { data } = await axios.get("/api/notes");
    setNotes(data);
    console.log(data);
 };

  useEffect(()=>{
   fetchNotes();
  },[]);

  // useEffect(() => {
  //       axios.get("http://localhost:5000/api/notes").then(res => {
  //          setNotes(res.data);
  //          console.log(res.data);
  //       })		
  //       }, [])

  return (
    <MainScreen titles='Welcome to Book store'>
      <Link to='/create'>
        <Button style={{marginLeft: 20, marginBottom: 6}} size="lg">Create New Note</Button>
       </Link>
        {
          notes.map(note => (
             <Card>
      <Card.Header style={{display:'flex'}}>
        <span style={{
           color :'black',
           textDecoration:'none',
           flex: 1,
           cursor: "pointer",
           alignSeklf:'center',
           fontSize:18,
        }}>{note.title}</span>
      
     <div>
      <Button href= {`/note/${note._id}`}>Edit</Button>
      <Button
       variant="danger" 
      className='mx-2' 
      onClick={()=>deleteHandler(note._id)}>
        Delete
        </Button>
     </div>
     </Card.Header>
     <Card.Body>
      {/* <h4>
        <Badge>
          
        </Badge>
      </h4> */}
        <blockquote className="blockquote mb-0">
          <p>
            {note.content}
          </p>
          <footer className="blockquote-footer">
            Created On -date
          </footer>
        </blockquote>
     </Card.Body>
    </Card>
          ))
        }
  
      
    </MainScreen>
  )
}

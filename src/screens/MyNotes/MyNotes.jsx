import React ,{ useEffect }from 'react'
import MainScreen from '../../components/MainScreen'
import { Link,useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch,useSelector } from 'react-redux'
import { deleteNoteAction, listNotes } from '../../actions/notesAction';
import Loading from '../../components/Loarding'
import ErrorMessage from '../../components/ErrorMessage'

export const MyNotes = ({search}) => {
 
  const history  = useHistory();
 const dispatch = useDispatch();
 const noteList = useSelector((state) => state.noteList);
 const { loading,notes,error} = noteList;

 const userLogin = useSelector(state =>state.userLogin)
 const {userInfo } = userLogin;

 /*after adding for it suddenly show in note page*/
 const noteCreate = useSelector((state) =>state.noteCreate);
 const { success: successCreate} = noteCreate;

  /*after adding for it suddenly show in note page*/
 const noteUpdate = useSelector((state) =>state.noteUpdate);
 const { success: successUpdate} = noteUpdate;

  const noteDelete = useSelector((state) =>state.noteDelete);
 const { 
  loading: loadingDelete, 
  error:errorDelete, 
  success:successDelete} = noteDelete;


  // const [notes, setNotes] = useState([]);

  const deleteHandler = (id)=>{
     if(window.confirm("Are you sure?")){
         dispatch(deleteNoteAction(id));
     }
  }

 
  useEffect(()=>{
   dispatch(listNotes());
   if(!userInfo){
    history.push('/');
   }
  },[dispatch, successCreate,successUpdate,successDelete,history,userInfo]);

  // useEffect(() => {
  //       axios.get("http://localhost:5000/api/notes").then(res => {
  //          setNotes(res.data);
  //          console.log(res.data);
  //       })		
  //       }, [])

  return (
    <MainScreen titles={`Welcome back ${userInfo.name}..`}>
      <Link to='/createnotes'>
        <Button style={{marginLeft: 20, marginBottom: 6}} size="lg">Create New Note</Button>
       </Link>
       {errorDelete && (<ErrorMessage variant='danger'>{errorDelete}</ErrorMessage>)}
       {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
       {loading && <Loading/>}
        {
          notes?.map(note => (
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
            Created On -date {" "}
            <cite title='Source Title'>
              {note.createdAt.substring(0,10)}
            </cite>
          </footer>
        </blockquote>
     </Card.Body>
    </Card>
          ))
        }
  
      
    </MainScreen>
  )
}

export default MyNotes;
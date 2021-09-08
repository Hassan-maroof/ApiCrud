import { useEffect, useState } from "react";
import { createPost } from '../Api/Index';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
function CreatePost() {
    const [title, settitle] = useState([]);
    const [body, setbody] = useState([]);
    const [loading , setloading] = useState(false) ;
    const [modal , setmodal] = useState(false) ;
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, body);
    };
    const handleClose = () => {
        setloading(true);
        console.log("called");
        console.log(title, body);
        const createNewPost = async () =>{
            const respcreateNewPost = await createPost(title, body);
            console.log(respcreateNewPost);
            
            if (respcreateNewPost.status === 201) {
                setloading(false);
                setmodal(true)
              }else{
                setloading(false);
                  alert("Bad Request");
              }
        }
        
        
        createNewPost();
    }
    
    const modalClose = () => {
        setmodal(false);
      };
      const Modalbody = (
        <div style={modalStyle}  className={classes.paper}>
          <h2 id="simple-modal-title">Request Status</h2>
          <p id="simple-modal-description">
            Successful Post created
          </p>
          
        </div>
      );
    return (
        <div>
        <Backdrop className={classes.backdrop} open={loading}  >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Modal
        open={modal}
        onClose={modalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {Modalbody}
      </Modal>
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="Title"
                variant="filled"
                required
                value={title}
                multiline
                rows={3}
                onChange={e => settitle(e.target.value)}
            />
            <TextField
                label="Body"
                variant="filled"
                required
                value={body}
                multiline
                rows={8}
                required
                onChange={e => setbody(e.target.value)}
            />
            <div>
                <Button type="Submit" variant="contained" onClick={() => handleClose()}>
                    Submit
                </Button>
            </div>
        </form>
        </div>
    );
}

export default CreatePost
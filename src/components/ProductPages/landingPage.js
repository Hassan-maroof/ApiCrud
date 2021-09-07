import { useEffect, useState } from 'react';
import { getAllPost, deleteSpecificPost } from '../Api/Index';
import mockup from '../../Shared/mockup.png'
import Card from "material-ui/Card";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import { Link } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from '@material-ui/core/IconButton';
import './landingPage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    height: 140,
    width: 100,
  },
  cardroot: {
    maxWidth: 345,
    height: 400,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  cardmedia: {
    height: 140,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  end:{
    alignSelf: "end",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function LandingPage() {
  const [allPost, setallPost] = useState([]);
  const [loading , setloading] = useState(false) ;
  useEffect(() => {
    const fetchAPI = async () => {
      setloading(true) ;
      const fetchAllpost = await getAllPost();
      setallPost(fetchAllpost.data);
      console.log('', allPost);
    };

    fetchAPI();

  }, []);
  useEffect(() => {
    console.log(allPost);
    if(allPost[0]){
      setloading(false);
    }

  }, [allPost]);

  const DeletePostReq = (async (id) => {
    setloading(true);
    console.log('deleted called');
    const deleteRes = await deleteSpecificPost(id);
    if (deleteRes.status === 200) {
      const newPostList = allPost.filter((elem) => elem.id != id)
      setallPost(newPostList);
    }
  })
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Grid container spacing={5} justifyContent='center'  className="container">
      <Backdrop className={classes.backdrop} open={loading}  >
         <CircularProgress color="inherit" />
       </Backdrop>
        {
          
          (allPost.length > 0) ?
            allPost.map((elem) => {
              return (
                  
                  <Grid item xs={15}>
                    <Paper className={classes.cardroot}>
                        <CardMedia className={classes.cardmedia}
                          image={mockup}
                          title="Product"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {elem.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {elem.body}
                          </Typography>
                        </CardContent>
                      
                      <CardActions style={{justifyContent:"space-between"  }} className ={classes.end} >
                        <Link to={`/product/${elem.userId}`} >
                          <Button size="small" color="primary">
                            Learn More
                          </Button>
                        </Link>

                        <IconButton size="small" color="primary" onClick={() => DeletePostReq(elem.id)}>
                          <DeleteIcon/>
                        </IconButton>
                      </CardActions>
                    </Paper>
                  </Grid>
               
              );
            }) : null
        }
      </Grid>
    </div>
  );
}

export default LandingPage;
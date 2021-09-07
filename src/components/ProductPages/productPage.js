import { useEffect, useState } from "react";
import { getSpecificPost } from '../Api/Index';
import mockup from '../../Shared/mockup.png';
import Card from "material-ui/Card";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import { BeatLoader } from "react-spinner" ;


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    paper: {
        padding: theme.spacing.unit,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    cardroot: {
        display: 'flex',
        
    },
    carddetails: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardcontent: {
        flex: '1 0 auto',
    },
    cardcover: {
        width: 151,
    },
    cardcontrols: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },


}));
function ProductPage({ match }) {
    const [post, setpost] = useState([]);
    const [loading , setloading] = useState(true) ;
    useEffect(() => {
        const fetchProduct = async () => {
            const fetchSpecifiPost = await getSpecificPost(match.params.id);
            setpost(fetchSpecifiPost.data);
            console.log('all', post);
            console.log('id', match.params.id);
        };
        fetchProduct();
        
    }, []);
    useEffect(() => {
        console.log(post);
    }, [])
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Grid container spacing={5} justifyContent='center' >
                {
                    (post[0]) ?
                        post.map((elem) => {
                            return (
                                <MuiThemeProvider>
                                    <Grid item xs={15}>
                                        <Paper className={classes.paper}>
                                            <Card className={classes.cardroot}>
                                                <div className={classes.carddetails}>
                                                    <CardContent className={classes.cardcontent}>
                                                        <Typography component="h5" variant="h5">
                                                            {elem.title}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardContent className={classes.cardcontent}>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {elem.body}
                                                        </Typography>
                                                    </CardContent>
                                                </div>
                                                <CardMedia
                                                    className={classes.cardcover}
                                                    image={mockup}
                                                    title="Live from space album cover"
                                                />
                                            </Card>
                                        </Paper>
                                    </Grid>
                                </MuiThemeProvider>
                            );
                        }) : null
                }
            </Grid>
        </div>
    );
}

export default ProductPage;
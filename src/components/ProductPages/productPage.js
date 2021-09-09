import { useEffect, useState } from "react";
import { getSpecificPost } from '../Api/Index';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import mockup from '../../Shared/mockup.png'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './landingPage.css';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    divider: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }

}));
function ProductPage({ match }) {
    const [post, setpost] = useState([]);
    const [loading, setloading] = useState(true);
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
        <div container justifyContent='center' className="postcontainer">
            {
                (post[0]) ?
                    post.map((elem) => {
                        return (
                            <List className={classes.root}>

                                <ListItem alignItems="flex-start">

                                    <ListItemText
                                        primary= {`User ${elem.userId}`}
                                        secondary={
                                            <>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    {elem.body}
                                                </Typography>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    {elem.title}
                                                </Typography>
                                                
                                            </>
                                        }
                                    />
                                    <ListItemAvatar>
                                        <Avatar alt="Travis Howard" src={mockup} />
                                    </ListItemAvatar>
                                </ListItem>

                                <Divider variant="inset" component="li" className={classes.divider}/>
                            </List>
                        );
                    }) : null
            }
        </div>
    );
}

export default ProductPage;
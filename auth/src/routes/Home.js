import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
    root: {
      textAlign: "center"
    },
}
));

const Home = () => {
    const classes = useStyles();
    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
        <ListItem button>
            <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
            <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
            <ListItemText primary="Spam" />
        </ListItem>
        </List>
    )
}

export default Home;
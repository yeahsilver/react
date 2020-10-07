
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { thisExpression } from '@babel/types';

const useStyle = makeStyles(theme=> ({
    footer: {
      textAlign:"center",
      backgroundColor: "#D5D5D5",
      marginTop: theme.spacing(10),
      height: 80
        
    }
}))

const Footer = () => {
    const classes = useStyle();
    return(
        <div className={classes.footer}>&copy; PingUS {new Date().getFullYear()} </div>
    );
}

export default Footer;
import img from '../grid-logo.png';
import { Grid, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, createMuiTheme } from "@material-ui/core/styles"
import Login from "./Login";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: "url("+img+")",
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
}));

const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#253053',
    },
  },
})

export default function Auth(){

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}> 
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Login />
        
        <Grid item xs={false} sm={6} md={7} className={classes.image} />

        </Grid>

    </ThemeProvider>
  );
}

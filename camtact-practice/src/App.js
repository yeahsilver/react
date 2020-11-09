import './App.css';
import img from './grid-logo.png';
import { Grid, TextField, Button, Checkbox, Paper, CssBaseline, Avatar, Typography, FormControlLabel, Link , Card} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, createMuiTheme } from "@material-ui/core/styles"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


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
  },
  paper: {
    margin: theme.spacing(5, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: '#253053',
  },
  typography:{
    marginBottom: theme.spacing(3),
    textColor: '#253053',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#253053',
    },
  },
})

export default function App(){
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}> 
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>

     
        <div className={classes.paper}>
        <Grid container style={{marginLeft:-30, marginTop: 20}}>
              <Grid item xs>
                
              </Grid>
              <Grid item>
              <p>Don't have an account? <Link href="#" variant="body2">
                  {" Sign Up"}
                </Link>
              </p>
                
              </Grid>
              
        </Grid>

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className={classes.typography} component="h1" variant="h5">
          Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="id"
              label="ID"
              name="id"
              autoComplete="id"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Grid container>
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="자동 로그인"
                />
              </Grid>
              <Grid item style={{paddingTop:10}}>
             Miss ID or Password?
                <Link href="#" variant="body2">
                  {" Find"}
                </Link>
              </Grid>
            </Grid>
            
            <Button
              backgroundColor="primary"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={6} md={7} className={classes.image} />
    </Grid>
    </ThemeProvider>
  );
}

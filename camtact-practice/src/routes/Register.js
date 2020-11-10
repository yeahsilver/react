import React from "react";
import { Grid, TextField, Button, Checkbox, Paper, Avatar, Typography, FormControlLabel, Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
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
function Register(){
    const classes = useStyles();
    return(
        <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
            <Grid container style={{marginLeft:-30, marginTop: 20}}>
                <Grid item xs>
                Go Back
                </Grid>

                <Grid item>
                    <p> Have an Account?
                        <Link className="Register"  variant="body2">
                            {" Sign In"}
                        </Link>
                    </p>
                </Grid>
            </Grid>

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography className={classes.typography} component="h1" variant="h5">
                Sign Up
                </Typography>

                <form className={classes.form} noValidate>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="first"
                    label="First Name"
                    name="first"
                    autoComplete="first"
                    autoFocus
                    />

                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="last"
                    label="last Name"
                    name="last"
                    autoComplete="last"
                    autoFocus
                    />
                    
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
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
                            label="I have read the Terms and Conditions"
                            />
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
                    Sign Up
                    </Button>
                </form>
            </div>
        </Grid>
    );
}

export default Register;
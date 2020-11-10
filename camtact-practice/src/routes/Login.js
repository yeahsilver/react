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
  
function Login({ history }){
    const classes = useStyles();
    const onClick = () =>{
        history.push("/register");
    }
    return(
        <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
            <Grid container style={{marginLeft:-30, marginTop: 20}}>
                <Grid item xs>
                </Grid>
            
                <Grid item>
                    <p>계정이 없으시다면?
                        <Link to ="/register"  className="Register"  variant="body2">
                            {" 회원가입"}
                        </Link>
                    </p>
                </Grid>
            </Grid>

            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography className={classes.typography} component="h1" variant="h5">
                로그인
                </Typography>

                <form className={classes.form} noValidate>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="id"
                    label="아이디"
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
                    label="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    />

                    <Grid container>
                        <Grid item xs>
                            <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="로그인 상태 유지"
                            />
                        </Grid>

                        <Grid item style={{paddingTop:10}}>
                       
                            <Link href="#" variant="body2">
                            {"아이디 혹은 비밀번호를 잊으셨나요?"}
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
                    로그인
                    </Button>
                </form>
            </div>
        </Grid>
    );
}


export default Login;
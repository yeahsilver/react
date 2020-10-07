import React from "react";
import logo from "../logo.png";
import logo_small from "../logo-small.png";
import { Link } from 'react-router-dom'; 
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  logo: {
    marginTop: theme.spacing(16)
  },
  logoTitle: {
    marginTop: theme.spacing(1),
    fontSize: theme.spacing(2),
    marginBottom: theme.spacing(10)
  },
  textField1: {
    backgroundColor: "white"
  },
  textField2: {
    backgroundColor: "white",
    marginBottom: theme.spacing(6)
  },
  bottom: {
    marginBottom: theme.spacing(1)
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container className={classes.root}>
        <img alt="CAMTACT" src={logo_small} className={classes.logo} />
      </Container>
      <Container>
        <form className={classes.root}>

          <TextField
            className={classes.textField1} 
            label="아이디"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            className={classes.textField2}
            margin="normal"
            label="비밀번호"
            variant="outlined"
            fullWidth
            required
          />

          <Link to ="/Home">
            <Button
              className={classes.bottom}
              fullWidth
              variant="contained"
              color="primary"
              size="medium"
            >
            로그인
            </Button>
          </Link>

          <Link to="/Register">
            <Button
            fullWidth
            variant="contained"
            color="secondary" 
            size="large">
            회원가입
            </Button>
        </Link>
        </form>
      </Container>
    </div>
  );
};

export default Login;
import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import logo_small from "../logo-small.png"

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

const Register = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>

      <Container className={classes.root}>
        <img alt="CAMTACT" src={logo_small} className={classes.logo} />
      </Container>
      <Container>
        <TextField
          className={classes.textField1} 
          label="아이디"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.textField1}
          margin="normal"
          label="이름"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.textField1}
          margin="normal"
          label="비밀번호"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.textField2}
          margin="normal"
          label="비밀번호 확인"
          variant="outlined"
          fullWidth
          required
        />

        
        <Button
          className={classes.bottom}
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
        >
        회원가입
        </Button>
        <Link to="/">
        <Button
        className={classes.bottom}
        fullWidth
        variant="contained"
        color="secondary"
        size="large"
        >
        취소
        </Button>
        </Link>
      </Container>
    </div>
  );
};

export default Register;
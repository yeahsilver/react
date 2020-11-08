import './App.css';
import img from './grid-logo.png';
import logo from './logo.png';
import { Grid, TextField, Button, InputAdornment, Checkbox, Paper } from '@material-ui/core';
import { AccountCircle, LockRounded} from "@material-ui/icons";

function App() {
  return (
    <div className="App">
    <Paper>
      <Grid container style={{minHeight:'100vh'}}>
      
        <Grid
          container
          item
          sx={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{padding:10}}
        >
          <div />
          <div
          style = {{ 
            display: "flex", 
            flexDirection:"column", 
            maxWidth: 400, 
            minWidth:300
            }}
          >
            <h2 align="left">Log In to Camtact</h2>
            <TextField label="Username" margin="normal" variant="outlined"/>
            <TextField label="Password" margin="normal" variant="outlined"/>

            <Grid container>
              <Grid item align="left">
                
                <p>
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                자동 로그인
                </p>
              </Grid>
              {/* <Grid item align="right">
              <p style={{margin:20, spacing:2}}> 메롱</p>
              </Grid> */}
            </Grid>

            <div style={{ height: 20, margin: 30}}>
              <Button variant="contained" color="primary" >
                Log In
              </Button>
            </div>
            <div style={{ height: 20, margin:30 }}>
              <Button variant="outlined">Intereseted in joining?</Button>
            </div>
            {/* <Grid container justify="center" spacing={2}>
              <Grid item>
                <Button variant="outlined" style={{margin:20}}> Forgot Password? </Button>
              </Grid>

            </Grid> */}

           
          </div>
          <div />
        </Grid>

        <Grid container xs={12} sm={6} alignItems= "center" style={{padding: 10}}>
          <div />
          <div>
            <Grid container justify='center'>
              <img src={img}style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="camtact"/>
            </Grid>
          </div>
            
        </Grid>
       
      </Grid>
      </Paper>
    </div>
  );
}

export default App;

import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
import Appbar from '../components/Appbar';
import { Container } from '@mui/system';
import Registreren from '../images/Registreren.png';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';

import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function RegistratiePagina() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    const paperStyle = { padding: '20px 20px', width: 600, height: 365, margin: "20px auto", backgroundColor:"#F2D2BD", borderRadius: "35px"}
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleClick = (e) => {
        e.preventDefault()
        const pakketje = { email, password }
        console.log(pakketje)
        fetch("http://localhost:8080/account/registreren", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pakketje)
        }).then(() => {
            console.log("Account is aangemaakt!")
        })
    }
    return (
        <>
            <Appbar />
            <br />
            <h1 style={{ color: "white", textAlign: "center" }}>Registreren
            <div>
            <img src={Registreren} width="410" height="300" alt="" style={{marginRight:"20px"}} />
          </div></h1>
            <Container>
            <Paper elevation={3} style={paperStyle}>
                <Paper elevation={3} style={{margin: "10px", padding: "15px", textAlign: "left", backgroundColor:"white", borderRadius: "25px"}}>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>Uw gegevens</b>
                <br />
                <br />
                    <form>
                    <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
          <InputLabel htmlFor="input-with-icon-textfield" style={{marginLeft:"120px"}}>Email</InputLabel>
          <FilledInput
            id="input-with-icon-textfield"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{marginLeft:"120px"}}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
          />
        </FormControl>
                       <br /><br /> 
                       <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
          <InputLabel htmlFor="filled-adornment-password" style={{marginLeft:"120px"}}>Wachtwoord</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{marginLeft:"120px"}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
                        <br /><br /><br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <Button variant='contained' color="secondary" style={{ backgroundColor: "black", textAlign: "center" }} onClick={handleClick}>
                            Maak account aan
                        </Button>
                        <br />
                        <br />
                    </form>
                </Paper>
            </Paper>
            </Container>
        </>
    );
}
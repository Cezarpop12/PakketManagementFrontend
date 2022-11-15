import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container } from '@mui/system';
import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';
import Appbar from '../components/Appbar';

export default function PakketjeAanmaken() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [code, setCode] = React.useState('')
  const handleClick = (e) => {
    e.preventDefault()
    const pakketje = { code }
    console.log(pakketje)
    fetch("http://localhost:3306/pakketjesdb/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pakketje)
    }).then(() => {
      console.log("Pakketje is aangemaaktt!")
    })
  }

return (
  <>
  <Appbar />
  <h1 style={{color:"black", textAlign:"center"}}>Maak een pakketje aan</h1>
  <Container>
    <Paper elevation={3} style={paperStyle}>
      <form>
        <TextField id="outlined-basic" label="Code" variant='outlined' fullWidth 
        value={code}
        onChange={(e)=>setCode(e.target.value)}
        />
        <Button variant='contained' color="secondary" style={{backgroundColor:"#3F00FF", textAlign:"center"}} onClick={handleClick}>
          Opslaan
        </Button>
      </form>
      {code}
    </Paper>
  </Container>
  </>
  );
}
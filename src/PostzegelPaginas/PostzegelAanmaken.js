import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
import { Container } from '@mui/system';
import Appbar from '../components/Appbar';
import Postzegel from '../images/Postzegel.png';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function PostzegelAanmaken() {
  const paperStyle = { padding: '20px 20px', width: 600, height: 250, margin: "20px auto", backgroundColor:"#F2D2BD", borderRadius: "35px"}
  const [prijs, setPrijs] = React.useState('')
  async function handleClick(e){
    e.preventDefault()
    const postzegelPrijs= { prijs }
    fetch("http://localhost:8080/postzegel/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postzegelPrijs)
    }).then(() => {
      console.log("Postzegel is aangemaaktt!")
    })
  }

  return (
    <>
      <Appbar />
      <br />
      <h1 style={{ color: "white", textAlign: "center" }}>Maak een postzegel aan
      <br />
      
      <div>
            <img src={Postzegel} width="330" height="270" alt=""  />
          </div>
      </h1>
      
      <Container>
      <Paper elevation={3} style={paperStyle}>
        <Paper elevation={3} style={{margin: "10px", padding: "15px", textAlign: "left", backgroundColor:"white", borderRadius: "25px"}}>
        <b>Postzegel&emsp;&emsp;&emsp;&emsp;</b>prijs: ...
        <br />
        <br />
          <form>
          <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
          <InputLabel htmlFor="input-with-icon-textfield" style={{marginLeft:"120px"}}>Email</InputLabel>
          <FilledInput
            id="input-with-icon-textfield"
            value={prijs}
            onChange={(e) => setPrijs(e.target.value)}
            style={{marginLeft:"120px"}}
          />
        </FormControl>
             <br /><br /><br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Button variant='contained' color="secondary" style={{ backgroundColor: "black", textAlign: "center" }} onClick={handleClick}>
              Opslaan
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
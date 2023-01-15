import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
import { Container } from '@mui/system';
import Appbar from '../components/Appbar';
import Pakketje from '../images/Pakketje.png';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



export default function PakketjeAanmaken() {
  const paperStyle = { padding: '20px 20px', width: 450, height: 270, marginLeft:"338px", margin: "20px auto", backgroundColor:"#F2D2BD", borderRadius: "35px"}
  const [code, setCode] = React.useState('')
  async function handleClick(e){
    e.preventDefault()
    const pakketjeCode = { code }
    fetch("http://localhost:8080/pakketje/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pakketjeCode)
    }).then(() => {
      console.log("Pakketje is aangemaaktt!")
    })
  }

  return (
    <>
      <Appbar />
      <br />
      <h1 style={{ color: "white", textAlign: "center" }}>Maak een pakketje aan
      <div>
            <img src={Pakketje} width="330" height="270" alt=""  />
          </div>
      </h1>
      <Container>
      <Paper elevation={3} style={paperStyle}>
        <Paper elevation={3} style={{margin: "10px", padding: "15px", marginLeft:"10px", width:"400px", textAlign: "left", backgroundColor:"white", borderRadius: "25px"}}>
        &emsp;&emsp;&emsp;&emsp;<b>Pakketje</b>
        <br />
        <br />
          <form>
          <FormControl sx={{ m: 1, width: '45ch', marginLeft:"-58px" }} variant="outlined">
          <InputLabel htmlFor="input-with-icon-textfield" style={{marginLeft:"120px"}}>Code</InputLabel>
          <FilledInput
            id="input-with-icon-textfield"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{marginLeft:"120px"}}
          />
        </FormControl>
             <br /><br /><br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
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
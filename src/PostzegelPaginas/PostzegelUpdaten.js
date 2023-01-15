import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import Appbar from '../components/Appbar';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function PakketjeUpdaten() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [prijs, setPrijs] = React.useState('')
  const {id} = useParams()
  const handleClick = (e) => {
    e.preventDefault()
    const postzegel = { prijs }
    console.log(postzegel)
    fetch(`http://localhost:8080/postzegel/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postzegel)
    }).then(() => {
      console.log("Postzegel is Geupdatet!")
    })
  }

  return (
    <>
      <Appbar />
      <br />
      <h1 style={{ color: "black", textAlign: "center" }}>Update uw Postzegel</h1>
      <Container>
        <Paper elevation={3} style={paperStyle}>
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
             <br /><br /><br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Button variant='contained' color="secondary" style={{ backgroundColor: "black", textAlign: "center" }} onClick={handleClick}>
              Opslaan
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
}
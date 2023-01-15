import * as React from 'react';
import { Paper, Button } from '@mui/material';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import Appbar from '../components/Appbar';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Pakketje from '../images/Pakketje.png';

export default function PakketjeUpdaten() {
  const paperStyle = { padding: '20px 20px', width: 450, height: 270, marginLeft:"338px", margin: "20px auto", backgroundColor:"#F2D2BD", borderRadius: "35px"}
  const [code, setCode] = React.useState('')
  const {id} = useParams()
  const handleClick = (e) => {
    e.preventDefault()
    const pakketje = { code }
    console.log(pakketje)
    fetch(`http://localhost:8080/pakketje/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pakketje)
    }).then(() => {
      console.log("Pakketje is Geupdatet!")
    })
  }

  return (
<>
      <Appbar />
      <br />
      <h1 style={{ color: "white", textAlign: "center" }}>Update uw pakketje
      <div>
            <img src={Pakketje} width="330" height="270" alt=""  />
          </div>
      </h1>
      <Container>
      <Paper elevation={3} style={paperStyle}>
        <Paper elevation={3} style={{margin: "10px", padding: "15px", marginLeft:"10px", width:"400px", textAlign: "left", backgroundColor:"white", borderRadius: "25px"}}>
        &emsp;&emsp;&emsp;&emsp;<b>Pakketje ({id})</b>
        <br />
        <br />
          <form>
          <FormControl sx={{ m: 1, width: '45ch', marginLeft:"-58px" }} variant="outlined">
          <InputLabel htmlFor="input-with-icon-textfield" style={{marginLeft:"120px"}}>Nieuwe code</InputLabel>
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
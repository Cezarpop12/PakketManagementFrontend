import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container } from '@mui/system';
import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';
import Appbar from '../components/Appbar';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//   },
// },
// }));

export default function PakketjeAanmaken() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [code, setCode] = React.useState('')
  const [pakketjes, setPakketjes] = React.useState([])
  // const classes = useStyles
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

  React.useEffect(() => {
    fetch("http://localhost:3306/pakketjesdb/getAll")
      .then(res => res.json())
      .then((result) => {
        setPakketjes(result);
      }
      )
  }, [])

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
    </Paper>

    <h1>Pakketjes</h1>
      <Paper elevation={3} style={paperStyle}>
        {pakketjes.map(pakketje => (
          <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={pakketje.id}>
            <b>Pakketje&emsp;&emsp;&emsp;&emsp;</b>Status: {pakketje.status}
            <br />
            <br />
            ID: {pakketje.id}&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;<Button variant="contained" style={{ backgroundColor: "black" }} color="secondary">
              Verzenden <ArrowForwardIcon />
            </Button>
            <br />
            Codee: {pakketje.code}
            <br />
          </Paper>
        ))
        }
      </Paper>

  </Container>
  </>
  );
}
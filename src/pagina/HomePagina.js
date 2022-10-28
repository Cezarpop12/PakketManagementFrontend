import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function HomePagina() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [code, setCode] = React.useState('')
  const [pakketjes, setPakketjes] = React.useState([])
  const handleClick = (e) => {
    e.preventDefault()
    const pakketje = { code }
    console.log(pakketje)
    fetch("http://localhost:8080/pakketje/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pakketje)
    }).then(() => {
      console.log("Pakketje is aangemaaktt!")
    })
  }

  //useffect = voor bij pagina starten om info te loaden, in dit geval alle pakketjes tonen bij opstart
  // React.useEffect(() => {
  //   fetch("http://localhost:8080/pakketje/getAll")
  //     .then(res => res.json())
  //     .then((result) => {
  //       setPakketjes(result);
  //     }
  //     )
  // }, [])

  const element = document.querySelector('#put-request .date-updated');
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Fetch PUT Request' })
  };
  fetch('http://localhost:8080/pakketje/updateOnderweg', requestOptions)
    .then(response => response.json())
    .then(data => element.innerHTML = data.updatedAt);

  return (
    <container>
      <h1>Pakketjes</h1>
      <Paper elevation={3} style={paperStyle}>
        {pakketjes.map(pakketje => (
          <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={pakketje.id}>
            <b>Pakketje&emsp;&emsp;&emsp;&emsp;Status: </b>{pakketje.status}
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
    </container>
  );
}
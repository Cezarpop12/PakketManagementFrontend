import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper,Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Pakketje() {
  const paperStyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const[code, setCode]=React.useState('')
  const[pakketjes, setPakketjes]=React.useState([])
  const handleClick=(e)=>{
    e.preventDefault()
    const pakketje={code}
    console.log(pakketje)
    fetch("http://localhost:8080/pakketje/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(pakketje)
    }).then(()=>{
      console.log("Pakketje is aangemaakt!")
    })
  }

  React.useEffect(()=>{
    fetch("http://localhost:8080/pakketje/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setPakketjes(result);
    }
    )
    },[])

  return (
    <container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"navy"}}>Pakketje aanmaken</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Code" variant="outlined" fullWidth 
      value={code}
      onChange={(e)=>setCode(e.target.value)}
      />
<Button variant="contained" style={{backgroundColor:"navy"}} color="secondary" onClick={handleClick}>
  Opslaan
</Button>
    </Box> 
    </Paper>
    <br/>
    <h1>Pakketjes</h1>
    <Paper elevation={3} style={paperStyle}>
      {pakketjes.map(pakketje=>(
        <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={pakketje.id}>
          <b>Pakketje&emsp;&emsp;&emsp;&emsp;Status: </b>{pakketje.status}
          <br/>
          <br/>
          ID: {pakketje.id}&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;<Button variant="contained" style={{backgroundColor:"black"}} color="secondary" onClick={handleClick}>
          Verzenden <ArrowForwardIcon />
         </Button>
          <br/>
          Code: {pakketje.code}
          <br/>
          </Paper>
      ))
}
      </Paper>
    </container>
  );
}



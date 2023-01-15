import * as React from 'react';
import { Paper, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import Appbar from '../components/Appbar';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import Postzegel from '../images/Postzegel.png';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AllePostzegels() {
  const paperStyle = { padding: '20px 20px', width: 600, margin: "20px auto", backgroundColor:"#F2D2BD", borderRadius: "35px"}
  const [postzegels, setPostzegels] = React.useState([])

  //useffect = voor bij pagina starten om info te loaden, in dit geval alle pakketjes tonen bij opstart
  React.useEffect(() => {
    fetch("http://localhost:8080/postzegel/getAll")
      .then(res => res.json())
      .then((result) => {
        setPostzegels(result);
      }
      )
  }, []);

  async function deletePostzegel(id,e){
    e.preventDefault();
    const request = await fetch(
     `http://localhost:8080/postzegel/delete/${id}`,{
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
     });
    const response = await request.json();
    if(response.status >= 200 && response.status < 300){
      alert('Succesvol verwijderd.');
    }
    else{
      alert('Het verwijderen van de postzegel is mislukt.');
    }
  }

  return (
    <>
      <Appbar />
      <br />
      <Container>
        <h1 style={{ textAlign: "center", color:"white" }}>Alle postzegels
        <div>
            <img src={Postzegel} width="330" height="270" alt=""  />
          </div></h1>
        <Paper elevation={3} style={paperStyle}>
          {postzegels.map(postzegel  => (
            <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left", backgroundColor:"white", borderRadius: "25px" }} key={postzegel.id}>
              <b>Postzegel&emsp;&emsp;&emsp;&emsp;</b>Prijs: {postzegel.prijs}
              <br />
              <br />
              ID: {postzegel.id}&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;
              <br />
              <Button variant="contained" style={{ backgroundColor: "#AE0000" }} color="secondary" onClick={(e) => deletePostzegel(postzegel.id,e)}>
                Delete <DeleteIcon fontSize="small"/>
              </Button>&emsp;&emsp;
                <Link to={`/postzegelUpdaten/${postzegel.id}`}>
                <Button variant="contained" style={{ backgroundColor: "Navy" }} color="secondary">
                Update <ReplayIcon fontSize="small"/>
                              </Button>
                </Link>
                <br />
                <br />
            </Paper>
          ))
          }
        </Paper>
      </Container>
    </>
  );
}
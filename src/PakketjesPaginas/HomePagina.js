import * as React from 'react';
import { Paper, Button, Grid } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import Appbar from '../components/Appbar';
import { Link } from 'react-router-dom';
import AllePakketjes from '../images/AllePakketjes4.png';
import ObjectBekijken4 from '../images/ObjectenBekijken8.png';
import AddObject2 from '../images/AddObject2.png';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '../components/Pagination';
import TotalePakketjes from '../components/TotalePakketjes';

export default function HomePagina() {
  const paperStyle1 = { padding: '20px 20px', width: 600, margin: "20px auto", backgroundColor: "#F2D2BD", borderBottomLeftRadius: "35px",borderTopLeftRadius: "35px"  };
  const paperStyle2 = { padding: '20px 20px', width: 250, margin: "20px auto", backgroundColor: "#F2D2BD", borderBottomRightRadius: "35px",borderTopRightRadius: "35px", marginTop:"19.9px"};
  const [pakketjes, setPakketjes] = React.useState([]);
  const [totalePakketjes, setTotalePakketjes] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setpostsPerPage] = React.useState(2)
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = pakketjes.slice(firstPostIndex, lastPostIndex)

  React.useEffect(() => {
    fetch("http://localhost:8080/pakketje/getAll")
      .then((response) => response.json())
      .then((data) => setTotalePakketjes(data.length))
      .catch(console.error);
  }, []);

  //useffect = voor bij pagina starten om info te loaden, in dit geval alle pakketjes tonen bij opstart
  React.useEffect(() => {
    fetch("http://localhost:8080/pakketje/getAll")
      .then(res => res.json())
      .then((result) => {
        setPakketjes(result);
      }
      )
  }, []);

  async function deletePakketje(id, e) {
    e.preventDefault();
    const request = await fetch(
      `http://localhost:8080/pakketje/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    const response = await request.json();
    if (response.status >= 200 && response.status < 300) {
      alert('Succesvol verwijderd.');
    }
    else {
      alert('Het verwijderen van het pakketje is mislukt.');
    }
  }

  async function statusOnderweg(id, e) {
    e.preventDefault();
    const request = await fetch(
      `http://localhost:8080/pakketje/statusOnderweg/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    }
    );
    const response = await request.json();
    if (response.status >= 200 && response.status < 300) {
      alert('Succesvol verzonden.');
    }
    else {
      alert('Het verzenden van het pakketje is mislukt.');
    }
  }



  return (
    <>
      <Appbar />
      <br />

      <Grid container direction="row" style={{ marginTop: "45px" }}>
        <Grid item xs={4.8}>
       <img src={AllePakketjes} width="550" height="520" alt="" style={{marginLeft:"23px"}}/>
          <TotalePakketjes />
        </Grid>
        <Grid item xs={4.45}>
          <Paper elevation={3} style={paperStyle1}>
            {currentPosts.map(pakketje => (
              <Paper elevation={6} style={{ margin: "10px", padding: "15px", width:"500px", textAlign: "left", backgroundColor: "white", borderTopLeftRadius: "25px", borderBottomLeftRadius:"25px" }} key={pakketje.id}>
                <p style={{ fontSize: "18px" }}><b>&emsp;Pakketje&emsp;&emsp;&emsp;&emsp;</b></p>
                <b>&emsp;ID: {pakketje.id}</b>
                &emsp;&emsp;
                <b>Status: {pakketje.status}</b>
                &emsp;&emsp;
                <b>Code: {pakketje.code}</b>
                <br /><br />&emsp;
                <Button variant="contained" style={{ backgroundColor: "#AE0000" }} color="secondary" onClick={(e) => deletePakketje(pakketje.id, e)}>
                  Delete <DeleteIcon fontSize="small" />
                </Button>&emsp;
                <Link to={`/pakketjeUpdaten/${pakketje.id}`}>
                  <Button variant="contained" style={{ backgroundColor: "Navy" }} color="secondary">
                    Update <ReplayIcon fontSize="small" />
                  </Button>
                </Link>&emsp;
                <Button variant="contained" style={{ backgroundColor: "black"}} color="secondary" onClick={(e) => statusOnderweg(pakketje.id, e)}>
                  Verzenden&emsp;<LocalShippingIcon fontSize="small" />
                </Button>
                <br />
                <br />
              </Paper>

            ))
            }
          </Paper>
          <Pagination totalPosts={pakketjes.length} 
                      postsPerPage={postsPerPage}
                      setCurrentPage={setCurrentPage}
                      currentPage={currentPage}
                      />
          </Grid>
          <Grid item xs={0}>
            <Paper elevation={3} style={paperStyle2}>
              <div>
              {currentPosts.map(pakketje => (
                <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left", backgroundColor: "white", borderTopRightRadius: "25px", height:"161.5px", borderBottomRightRadius: "25px", marginLeft:"-20px"}} key={pakketje.id}>
                  
                  <Link to={`/objectToevoegen/${pakketje.id}`} style={{textDecoration:"none"}}>
                    <Button variant="contained" style={{ backgroundColor: "black", height: "80px", width:"230px", borderRadius:"0px", borderTopRightRadius: "15px"}} color="secondary">
                    <img src={AddObject2} width="50" height="40" alt="" style={{marginLeft:"0px"}}/>
                    </Button>
                  </Link>
                  <br />
                  <Link to={`/objectenBekijken/${pakketje.id}`} style={{textDecoration:"none"}}>
                  <Button variant="contained" style={{ backgroundColor: "grey", height: "80px",width:"230px", borderRadius:"0px" , marginLeft:"0px", borderBottomRightRadius: "15px"}} color="secondary">
                  <img src={ObjectBekijken4} width="120" height="115" alt="" style={{marginLeft:"0px"}}/>
                  </Button>
                  </Link>
                  &emsp;
                  <br />
                  <br />
                </Paper>
                

              ))
              }
              </div>
            </Paper>
          </Grid>
        </Grid>
    </>
  );
}
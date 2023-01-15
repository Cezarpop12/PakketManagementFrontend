import * as React from 'react';
import { Paper, Button, Grid  } from '@mui/material';
import { useParams } from 'react-router-dom';
import Appbar from '../components/Appbar';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import ObjectBekijken4 from '../images/ObjectenBekijken8.png';
import AddObject2 from '../images/AddObject2.png';


export default function PakketjeUpdaten() {
  const paperStyle = { padding: '50px 20px', width: 460, margin: "20px auto", backgroundColor: "#F2D2BD", borderBottomLeftRadius: "35px",borderTopLeftRadius: "35px",borderTopRightRadius: "35px", borderBottomRightRadius: "35px"  }
  const paperStyle1 = { padding: '20px 20px', width: 600, margin: "20px auto", backgroundColor: "#F2D2BD", borderBottomLeftRadius: "35px",borderTopLeftRadius: "35px"  };
  const paperStyle2 = { padding: '20px 20px', width: 250, margin: "20px auto", backgroundColor: "#F2D2BD", borderBottomRightRadius: "35px",borderTopRightRadius: "35px", marginTop:"19.9px"};
  const [objecten, setObjecten] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setpostsPerPage] = React.useState(2)
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = objecten.slice(firstPostIndex, lastPostIndex)
  const [objectNaam, setObjectNaam] = React.useState('')
  const {id} = useParams()
  const handleClick = (e) => {
    e.preventDefault()
    const object = { objectNaam }
    console.log(object)
    fetch(`http://localhost:8080/object/saveObject`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object)
    }).then(() => {
      console.log("Object is aangemaakt")
    })
  }

  async function objectToevoegenAanPakketje(object_id, e) {
    e.preventDefault();
    const request = await fetch(
      `http://localhost:8080/object/addObjectToPakketje/${object_id}/${id}`, {
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

  React.useEffect(() => {
    fetch("http://localhost:8080/object/getAllObjects")
      .then(res => res.json())
      .then((result) => {
        setObjecten(result);
      }
      )
  }, []);

  return (
    <>
      <Appbar />
      <br />

      <Grid container direction="row" style={{ marginTop: "45px" }}>
        <Grid item xs={4.8} style={{marginTop:"-62px"}}>
      <h1 style={{ color: "white", textAlign: "center" }}>Maak een object aan</h1>
      <Paper elevation={3} style={paperStyle}>
        <Paper elevation={3} style={{margin: "10px", padding: "15px", marginLeft:"10px", width:"400px", textAlign: "left", backgroundColor:"white", borderRadius: "25px"}}>
        &emsp;&emsp;&emsp;&emsp;<b>Object</b>
        <br />
        <br />
          <form>
          <FormControl sx={{ m: 1, width: '45ch', marginLeft:"-58px" }} variant="outlined">
          <InputLabel htmlFor="input-with-icon-textfield" style={{marginLeft:"120px"}}>Object naam</InputLabel>
          <FilledInput
            id="input-with-icon-textfield"
            value={objectNaam}
            onChange={(e) => setObjectNaam(e.target.value)}
            style={{marginLeft:"120px"}}
          />
        </FormControl>
             <br /><br /><br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Button variant='contained' color="secondary" style={{ backgroundColor: "black", textAlign: "center" }} onClick={handleClick}>
              Toevoegen
            </Button>
            <br />
            <br />
          </form>
        </Paper>
        </Paper>
        </Grid>
        <Grid item xs={4.45} style={{marginTop:"-65.4px"}}>
        <h1 style={{ color: "white", textAlign: "center" }}>Kies uw objecten voor pakketje: {id}</h1>
          <Paper elevation={3} style={paperStyle1}>
            {currentPosts.map(object => (
              <Paper elevation={6} style={{ margin: "10px", padding: "15px", width:"500px", textAlign: "left", backgroundColor: "white", borderTopLeftRadius: "25px", borderBottomLeftRadius:"25px" }} key={object.id}>
                <p style={{ fontSize: "18px" }}><b>&emsp;Object&emsp;&emsp;&emsp;&emsp;</b></p>
                <b>&emsp;ID: {object.id}</b>
                &emsp;&emsp;
                <b>ObjectNaam: {object.objectNaam}</b>
                <br /><br />&emsp;
              </Paper>
            ))
            }
          </Paper>
          <Pagination totalPosts={objecten.length} 
                      postsPerPage={postsPerPage}
                      setCurrentPage={setCurrentPage}
                      currentPage={currentPage}
                      />
          </Grid>
          <Grid item xs={0}>
            <Paper elevation={3} style={paperStyle2}>
              <div>
              {currentPosts.map(object => (
                <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left", backgroundColor: "white", borderTopRightRadius: "25px", height:"125px", borderBottomRightRadius: "25px", marginLeft:"-20px"}} key={object.id}>
              
                  <Button variant="contained" style={{ backgroundColor: "black", height: "80px",width:"230px", borderRadius:"0px" , marginLeft:"0px", borderBottomRightRadius: "15px"}} color="secondary" onClick={(e) => objectToevoegenAanPakketje(object.id, e)}>
                  <h1 style={{fontSize:"20px" }}>Toevoegen</h1> &emsp;
                  <img src={AddObject2} width="47" height="40" alt="" style={{marginLeft:"0px"}}/>
                  </Button>
                
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
import * as React from 'react';
import { Paper, Button, Grid } from '@mui/material';
import Appbar from '../components/Appbar';
import { useParams } from 'react-router-dom';

export default function HomePagina() {
  const paperStyle1 = { padding: '20px 20px', width: 600, margin: "20px auto", backgroundColor: "#F2D2BD", borderBottomLeftRadius: "35px",borderTopLeftRadius: "35px"  };
  const [objecten, setObjecten] = React.useState([]);
  const {id} = useParams()
  //useffect = voor bij pagina starten om info te loaden, in dit geval alle pakketjes tonen bij opstart
  React.useEffect(() => {
    fetch(`http://localhost:8080/object/getAllObjects/${id}`)
      .then(res => res.json())
      .then((result) => {
        setObjecten(result);
      }
      )
  }, []);

  return (
    <>
 <Appbar />
    <container>
    <h1 style={{ color: "white", textAlign: "center" }}>Objecten van pakket met id: {id}</h1>
      <Paper elevation={3} style={paperStyle1}>
        {objecten.map(object => (
          <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={object.id}>
            <b>Object&emsp;&emsp;&emsp;&emsp;ID: {object.id}
            <br />
            <br />
            Omschrijving: {object.objectNaam}</b>
          </Paper>
        ))
        }
      </Paper>
    </container>
    </>
  );
}
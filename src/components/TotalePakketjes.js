import * as React from 'react';

export default function TotalePakketjes() {
  const [totalePakketjes, setTotalePakketjes] = React.useState(0);

  React.useEffect(() => {
    fetch("http://localhost:8080/pakketje/getAll")
      .then((response) => response.json())
      .then((data) => setTotalePakketjes(data.length))
      .catch(console.error);
  }, []);

  return (
    <div>
       <h1 style={{ marginLeft: "40px", marginTop: "-40px", color: "white", fontSize:"60px" }}>Alle pakketjes ({totalePakketjes})</h1>
    </div>
  )
}

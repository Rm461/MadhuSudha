import React, { useState } from "react";
import { Container, Stack, TextField, Button } from "@mui/material";

const Home = () => {
  const [isFlightReserved, setIsFlightReserved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission logic here

    // Set the state to indicate that the flight is reserved successfully
    setIsFlightReserved(true);
  };

  return (
    <Container maxWidth="lg">
      <div style={{ paddingTop: 20 }}></div>
      <center>
        <h1>FLIGHT RESERVATION FORM</h1>
      </center>
      <h2 style={{ fontSize: "16px" }}>Passenger Name</h2>
      <Stack>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </Stack>
      <br />
      <h3 style={{ fontSize: "16px" }}>Email</h3>
      <Stack>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </Stack>
      <br />
      <h4 style={{ fontSize: "16px" }}>Phone</h4>
      <Stack>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </Stack>
      <br />
      <h5 style={{ fontSize: "16px" }}>Flight Name</h5>
      <Stack>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </Stack>
      <br />
      <h6 style={{ fontSize: "16px" }}>Departure</h6>
      <Stack>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </Stack>
      <br />
      <h7 style={{ fontSize: "16px" }}>Destination</h7>
      <Stack>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </Stack>
      <br />
      <center>
        <form onSubmit={handleSubmit}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
        {isFlightReserved && (
          <p style={{ marginTop: 10 }}>Your flight is reserved successfully!</p>
        )}
      </center>
    </Container>
  );
};

export default Home;
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [isLoggedIn13, setIsLoggedIn13] = useState(false);
  const navigate13 = useNavigate();

  const handleLogin13 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn13(true);

    // Navigate to the desired route
    navigate13("/BasicTable"); // Example: Navigate to the Admin page after login
  };

  let navigate = useNavigate();

const [userData, setUserData] = useState({
    email: "",
    id: "",
    destination: "",
    depature: "",
    passengerName: "",
    phoneno: "",
    flightName: "",

  });

  const { email,id,destination,depature,passengerName,phoneno,flightName } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post(`http://localhost:8080/adduser`, userData);
    setUserData({ 
      email: "",
      id: "",
      destination: "",
      depature: "",
      passengerName: "",
      phoneno: "",
      flightName: "",

    });
    navigate("/BasicTable");
  };

  


  return (
    <Container>
      <Box>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="email"
              name="email"
              value={email}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="destination"
              name="destination"
              value={destination}
              onChange={handleData}
            />
            <TextField
              label="passengerName"
              name="passengerName"
              value={passengerName}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="phoneno"
              name="phoneno"
              value={phoneno}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="flightName"
              name="flightName"
              value={flightName}
              variant="outlined"
              onChange={handleData}
            />
            <TextField
              label="depature"
              name="depature"
              value={depature}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained"> 
                Reserve Ticket
              </Button>
              <Button href="/" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddUser;
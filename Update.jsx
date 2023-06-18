import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [userData, setUserData] = useState({
    email: "",
    id: "",
    destination: "",
    depature: "",
    passengerName: "",
    phoneno: "",
    flightName: "",

  });


  const { email, destination, depature,passengerName,phoneno,flightName } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.put(`http://localhost:8080/update/${id}`, userData);
    navigate("/BasicTable");
  };

  const loadData = async (e) => {
    const result = await axios.get(`http://localhost:8080/finduser/${id}`);
    setUserData(result.data);
  };

  return (
    <Container>
      <Box>
        <h1>Update Your Booking Details</h1>
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
              label="depature"
              name="depature"
              value={depature}
              variant="outlined"
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
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained">
                Add User
              </Button>
              <Button href="/BasicTable" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default UpdateUser;
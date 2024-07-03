import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  
  const [name,setName ] = useState()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/register',{name,email,password})
    .then(res => {
      navigate('/login')
    })
    .catch(err => console.log(err))
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
          padding: 2,
          boxShadow: 3,
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          gutterBottom
          sx={{ fontWeight: "600" }}
        >
          Please SignUp
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "rgb(24, 42, 89)",
              "&:hover": {
                backgroundColor: "rgb(24, 42, 89)",
                opacity: 0.9,
              },
            }}
          >
            Login
          </Button>
          <Typography variant="p" component="h5" gutterBottom>
            Already have an account please{" "}
            <span className="text-[#182A59] underline ">
              <Link to="/login">Login</Link>
            </span>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;

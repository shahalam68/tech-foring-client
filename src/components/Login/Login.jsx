
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
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
          Please Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            Don’t have an account?{" "}
            <span className="text-[#182A59] ">
              <Link to="/register">SignUp</Link>
            </span>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

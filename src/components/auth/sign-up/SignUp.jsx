import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import SignUpImg from "../../../assets/signup-g.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      padding={2}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: { xs: "100%", sm: "90%", md: "80%" },
          maxWidth: "1200px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            component="img"
            src={SignUpImg}
            alt="Sign Up"
            sx={{
              width: { xs: "80%", sm: "70%", md: "100%" },
              maxHeight: { xs: "200px", sm: "300px", md: "400px" },
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box padding={5} boxShadow={3} borderRadius={2} bgcolor="white">
            <Typography variant="h4" gutterBottom>
              Get Started Shopping
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to FreshCart! Enter your email to get started.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="First Name" placeholder="First Name" size="small" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Last Name" placeholder="Last Name" size="small" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  fullWidth
                  label="Email"
                  placeholder="Email"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "Hide password"
                              : "Show password"
                          }
                          edge="end"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Register
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;

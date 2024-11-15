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
import { Controller, useForm } from "react-hook-form";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      padding={2}
    >
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
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
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="First Name"
                        placeholder="First Name"
                        size="small"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Last Name"
                        placeholder="Last Name"
                        size="small"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Email"
                        placeholder="Enter your email"
                        size="small"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
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
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                          {...field}
                        />
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SignUp;

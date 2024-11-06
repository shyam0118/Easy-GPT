import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width="100%"
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      display="flex"
      alignItems="center"
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography
        variant="h1"
        color="primary"
        fontWeight="bold"
        sx={{ flexGrow: 1, textAlign: "center" }}
      >
        NexaAI
      </Typography>
      <Box display="flex" marginLeft="auto">
        {loggedIn ? (
          <>
            <NavLink to="/" style={{ padding: "0 1rem" }}>
              Home
            </NavLink>
            <NavLink
              to="/login"
              onClick={handleLogout}
              style={{ padding: "0 1rem" }}
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/register" style={{ padding: "0 1rem" }}>
              Sign Up
            </NavLink>
            <NavLink to="/login" style={{ padding: "0 1rem" }}>
              Sign In
            </NavLink>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;

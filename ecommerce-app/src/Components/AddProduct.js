import React, { useState } from "react";
import { Paper, Typography, TextField, Box, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProducts } from "../Redux/addProducts";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [state, setState] = useState({
    title: "",
    price: "",
    rating: "",
    link: "",
  });

  const dispatch = useDispatch();

  const paperStyle = {
    padding: "50px 150px",
    width: 600,
    margin: "150px auto",

    transform: "scale(1.0)",
    animation: "emergeOut 0.5s ease-out",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "400px",
    margin: "auto",
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const createProduct = () => {
    try {
      dispatch(addProducts(state));
      toast.success(`Product added successfully`);
      setState({
        title: "",
        price: "",
        rating: "",
        link: "",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} sx={paperStyle}>
        <Typography variant="h4" align="center" mb={4}>
          Create Product
        </Typography>
        <form style={formStyle}>
          <TextField
            name="title"
            label="Product Title"
            variant="outlined"
            value={state.title}
            onChange={handleChange}
          />
          <TextField
            name="price"
            label="Product Price (Rs)"
            variant="outlined"
            type="number"
            value={state.price}
            onChange={handleChange}
          />
          <TextField
            name="rating"
            label="Product Rating"
            variant="outlined"
            type="number"
            value={state.rating}
            onChange={handleChange}
          />
          <TextField
            name="link"
            label="Product Image Link"
            variant="outlined"
            value={state.link}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={createProduct}
            sx={{ marginTop: "20px" }}
          >
            Create Now!
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default AddProduct;

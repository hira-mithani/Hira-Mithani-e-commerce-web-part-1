import {
  Box,
  Card,
  Divider,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Product1 from "../../assets/lays-img.png";
import Product2 from "../../assets/KURKURE-img.webp";
import Product3 from "../../assets/c1102090-1.jpg";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./product.css";
import CloseIcon from "@mui/icons-material/Close";

const dummyProducts = [
  {
    id: 1,
    img: Product1,
    name: "Product 1",
    price: "10",
  },
  {
    id: 2,
    img: Product2,
    name: "Product 2",
    price: "20",
  },
  {
    id: 3,
    img: Product3,
    name: "Product 3",
    price: "30",
  },
];

function Products() {
  const [cartList, setCartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);

  const cartHandler = (product) => {
    const isExist = cartList.find((cart) => cart.id === product.id);
    console.log(isExist);

    if (!isExist) {
      setCartList((prev) => [...prev, product]);

      let strCartList = JSON.stringify(cartList)

      localStorage.setItem("cartList", strCartList);
    } else {
      setOpenAlert(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };


  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <SnackbarContent
          style={{
            backgroundColor: "#bb2124",
          }}
          message={
            <Box className="d-flex justify-content-between">
              <span id="client-snackbar">Product already in cart list</span>
              <CloseIcon sx={{float: "right"}} onClick={handleClose} />
            </Box>
          }
        />
      </Snackbar>

      <Box sx={{ display: "flex", gap: "30px" }} className="container mt-3">
        {dummyProducts?.map((product, index) => {
          return (
            <Card
              key={index}
              sx={{ padding: "20px", cursor: "pointer", width: "250px" }}
            >
              <Box>
                <Box className="text-center">
                  <img
                    className="product-img"
                    width={100}
                    src={product.img}
                    alt={product.name}
                  />
                </Box>
                <Typography variant="h5" className="mt-3">
                  {product.name}
                </Typography>
                <Divider sx={{ borderColor: "#333" }} variant="fullwidth" />
                <Box className="d-flex justify-content-between mt-2">
                  <ShareIcon />
                  <FavoriteIcon />
                  <AddShoppingCartIcon onClick={() => cartHandler(product)} />
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </>
  );
}

export default Products;

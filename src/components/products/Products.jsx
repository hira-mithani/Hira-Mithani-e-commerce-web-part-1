import {
  Autocomplete,
  Box,
  Card,
  CircularProgress,
  Divider,
  Grid,
  Snackbar,
  SnackbarContent,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./product.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/add-cart/addCartSlice";

const Products = () => {
  const [cartList, setCartList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [istLoading, setIsLoading] = useState(false);
  const [categoryOptions, setCategotyOptions] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  console.log(istLoading, "istLoading");

  const cartHandler = (product) => {
    const isExist = cartList.find((cart) => cart.id === product.id);

    if (!isExist) {
      setCartList((prev) => [...prev, product]);
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

  const searchHandler = (event) => {
    if (event?.target?.value === "") {
    }
    const filteredArr = products?.filter((product) =>
      product?.title.toLowerCase().includes(event?.target?.value.toLowerCase())
    );
    setProducts(filteredArr);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");

        setProducts(response?.data);

        if (response.status === 200) {
          setIsLoading(false);
          setProducts(response?.data);
          setAllProducts(response?.data);

          const filterCategories = response?.data?.map((product) => {
            return {
              label: product?.category,
              value: product?.category,
              category: product.category,
            };
          });
          const uniqueCategories = filterCategories.filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.value === item.value)
          );

          setCategotyOptions(uniqueCategories);
        } else {
          setIsLoading(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filteredProducts = allProducts?.filter(
      (products) => products?.category === categoryFilter?.value
    );
    setProducts(filteredProducts);
    console.log(filteredProducts, "filteredProducts");
  }, [categoryFilter]);

  return (
    <>
      <Box className="container mt-3 d-flex justify-content-between">
        <TextField
          onChange={searchHandler}
          size="small"
          placeholder="Search items..."
        />
        <Autocomplete
          size="small"
          disablePortal
          options={categoryOptions}
          sx={{ width: 240 }}
          onChange={(e, newValue) => {
            setCategoryFilter(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Categories" />}
        />
      </Box>
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
              <CloseIcon sx={{ float: "right" }} onClick={handleClose} />
            </Box>
          }
        />
      </Snackbar>

      {istLoading ? (
        <Box className="text-center mt-5">
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <Grid container className="container mt-3">
          {products?.map((product, index) => {
            return (
              <Grid item xs={12} md={3} mb={3} key={index}>
                <Card
                  sx={{ padding: "20px", cursor: "pointer", width: "280px" }}
                >
                  <Box>
                    <Box className="text-center">
                      <img
                        style={{ maxHeight: "140px", minHeight: "140px" }}
                        className="product-img"
                        width={100}
                        src={product.image}
                        alt={product.title}
                      />
                    </Box>
                    <Tooltip title={product?.title} placement="top">
                      <Typography variant="h6" className="mt-3">
                        {product?.title?.length >= 22
                          ? `${product?.title.slice(0, 18)}...`
                          : product?.title}
                      </Typography>
                    </Tooltip>
                    <Divider sx={{ borderColor: "#333" }} variant="fullwidth" />
                    <Box className="d-flex justify-content-between mt-2">
                      <Tooltip title="Product Details">
                        <VisibilityIcon
                          onClick={() => {
                            navigate(`/product-details/${product?.id}`);
                          }}
                        />
                      </Tooltip>
                      <Tooltip title="Add to Favorite">
                        <FavoriteIcon />
                      </Tooltip>
                      <Tooltip title="Add to Cart">
                        <AddShoppingCartIcon
                          onClick={()=>dispatch(addToCart())}
                        />
                      </Tooltip>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};
export default Products;

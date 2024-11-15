import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";

const CartList = (props) => {
  const { open, toggleDrawer } = props;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItemsArr = localStorage.getItem("cartList");
    const parseCartItemsArr = JSON.parse(cartItemsArr);
    setCartItems(parseCartItemsArr || []); 
  }, []);

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <Typography variant="h5">Cart Items</Typography>
        </Box>
      </Drawer>
    </div>
  );
};

export default CartList;



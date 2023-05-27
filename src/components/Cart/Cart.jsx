import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { removeItemFromCart, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const subTotal = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51NBC7QI0myv71fyybdsbR33Xj4IzzzRajtI11ExyqqB8nFOQAoqRtyBt64ykkq9gEIgZfqYgdaqgak69HnLPE0OP00Le18nBwz"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack
      position="absolute"
      top="80px"
      right="0"
      zIndex={5}
      backgroundColor="gray.100"
      padding="20px"
      boxShadow="0.8rem 0.8rem 1.4rem #c8d0e7,
          -0.2rem -0.2rem 1.8rem #c8d0e7"
    >
      <Heading fontSize={18} color="gray.500">
        Products in your cart
      </Heading>
      {products?.map((item) => (
        <Flex alignItems="center" gap={4} key={item.id}>
          <Image
            src={process.env.REACT_APP_UPLOAD_URL + item.img}
            width="80px"
            height="100px"
            objectFit="cover"
          />
          <Box>
            <Heading fontSize={18} marginBottom="10px" color="gray.500">
              {item.title}
            </Heading>
            <Text
              textOverflow="ellipsis"
              color="gray.400"
              marginBottom={2}
              fontSize="14px"
            >
              {item.desc?.substring(0, 100)}
            </Text>
            <Text color="#2879fe">
              {item.quantity} x ${item.price}
            </Text>
          </Box>
          <Icon
            as={RiDeleteBin5Line}
            color="red"
            fontSize="20px"
            cursor="pointer"
            onClick={() => dispatch(removeItemFromCart(item.id))}
          />
        </Flex>
      ))}
      <Flex alignItems="center" justifyContent="space-between">
        <Text>SUBTOTAL</Text>
        <Text>{subTotal()}</Text>
      </Flex>
      <Button
        width="250px"
        padding="10px"
        backgroundColor="#2879fe"
        color="white"
        border="none"
        onClick={handlePayment}
      >
        PROCEED TO CHECKOUT
      </Button>
      <Text
        color="red"
        fontSize="12px"
        cursor="pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </Text>
    </Stack>
  );
};

export default Cart;

import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      boxShadow="0.8rem 0.8rem 1.4rem #c8d0e7,
          -0.2rem -0.2rem 1.8rem #c8d0e7"
      sx={{
        height: "80px",
      }}
    >
      <Flex
        justify="space-between"
        padding={{base:"25px 25px 25px 10px", md:"25px 25px"}}
        letterSpacing="0.025em"
        fontWeight="700"
      >
        <Flex align="center" display={{ base: "unset", md: "unset", lg:"none" }}>
          <Menu>
            <MenuButton
              as={HamburgerIcon}
              cursor="pointer"
              color="brand.900"
              fontSize={{ base: "2rem", md: "1.5rem" }}
            />

            <MenuList>
              <MenuItem>
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link
                  to="/About"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  About
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                {" "}
                <Link
                  to="/Contact"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link
                  to="/products/:id"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Stores
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex
          align="center"
          gap="20px"
          display={{ base: "none", md: "none", lg:"flex"}}
          fontSize=".9rem"
        >
          <Box _hover={{ textDecoration: "underline" }}>
            <Link
              to="/products/1"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              MEN
            </Link>
          </Box>
          <Box _hover={{ textDecoration: "underline" }}>
            <Link
              to="/products/2"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              WOMEN
            </Link>
          </Box>
          <Box _hover={{ textDecoration: "underline" }}>
            <Link
              to="/products/3"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              KIDS
            </Link>
          </Box>
          <Box _hover={{ textDecoration: "underline" }}>
            <Link
              to="/products/4"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              NEW ARRIVALS
            </Link>
          </Box>
          <Box _hover={{ textDecoration: "underline" }}>
            <Link
              to="/products/4"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              SALES
            </Link>
          </Box>
        </Flex>
        <Flex align="center" width={{ base: "100%", md: "100%", lg:"auto" }}>
          <Link
            to="/"
            style={{
              color: "inherit",
              textDecoration: "none",
              letterSpacing: "0.25em",
              textAlign: "center",
              width: "100%",
             fontStyle:"italic"
            
            }}
          >
            STYLESTOCK
          </Link>
        </Flex>
        <Flex
          align="center"
          gap="20px"
          width={{ base: "20%", md: "40%" }}
          justify="space-between"
        >
          <Flex
            align="center"
            display={{ base: "none", md: "none", lg:"flex" }}
            justify="space-between"
            gap="30px"
            marginLeft="5rem"
          >
            <Box _hover={{ textDecoration: "underline" }} fontSize=".9rem">
              <Link
                to="/products/1"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                RERUN
              </Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }} fontSize=".9rem">
              <Link
                to="/products/1"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                STORES
              </Link>
            </Box>
            <Box _hover={{ textDecoration: "underline" }} fontSize=".9rem">
              <Link
                to="/products/1"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                SUSTAINABILITY
              </Link>
            </Box>
          </Flex>
          <Flex
            align="center"
            color="#777"
            justify={{lg:"space-between", md:"flex-end"}}
            width={{base:"auto", md:"100%", lg:"100%"}}
            gap={{base:7, md:"50px", lg:7}}
           
          >
            <Flex align="center" display={{ base: "none", md: "flex" }}>
              <SearchIcon
                sx={{
                  color: colorMode === "light" ? "inherit" : "whitesmoke",
                  fontSize: "30px",
                }}
              />
            </Flex>
            <Flex position="relative" align="center">
              <ShoppingCartIcon
                sx={{
                  color: colorMode === "light" ? "inherit" : "whitesmoke",
                  fontSize: "30px",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  color: "#fefefe",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#2879fe",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  fontSize: "12px",
                }}
              >
                0
              </span>
            </Flex>

            <Box onClick={toggleColorMode} cursor="pointer" fontSize="25px">
              {colorMode === "light" ? (
                <Icon
                  as={MoonIcon}
                  onClick={toggleColorMode}
                  cursor="pointer"
                />
              ) : (
                <Icon as={SunIcon} sx={{ color: "white" }} />
              )}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Navbar;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "../components/Card.js";
import prod1 from "../assets/cute_plant.jpg";
import "../styles/products.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <div className="product">
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 12, sm: 6, md: 3 }}
          sx={{
            width: "100%",
            flexDirection: "row",
            autoFlow: "dense",
          }}
        >
          <Grid item>
            <Card
              imageUrl={prod1}
              listingName="Product Name"
              price="99.99"
              productId="1"
            />
          </Grid>
          <Grid item>
            <Card imageUrl={prod1} listingName="Moss Pole" price="5.99" />
          </Grid>
          <Grid item>
            <Card imageUrl={prod1} listingName="Product Name" price="99.99" />
          </Grid>
          <Grid item>
            <Card imageUrl={prod1} listingName="Product Name" price="99.99" />
          </Grid>
          <Grid item>
            <Card imageUrl={prod1} listingName="Product Name" price="99.99" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

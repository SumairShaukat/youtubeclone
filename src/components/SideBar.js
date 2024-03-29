import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = "New";

const SideBar = () => (
  <Stack
    direction="row"
    sx={{
      overflowy: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        key={category.name}
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "white",
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default SideBar;

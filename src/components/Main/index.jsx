import { useState, useMemo, useEffect } from "react";
import * as C from "./style";
import {
  Typography,
  ListItem,
  FormControl,
  Checkbox,
  useMediaQuery,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import products from "../../api/products.json";
import { Menu } from "@mui/icons-material";

export default function Main() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const productsList = products.data.nodes;
  const categories = Array.from(
    new Set(productsList.map((node) => node.category.name))
  );

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategories((selectedCategories) => {
      if (selectedCategories.includes(value)) {
        return selectedCategories.filter((category) => category !== value);
      } else {
        return [...selectedCategories, value];
      }
    });
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = useMemo(() => {
    return productsList.filter((node) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(node.category.name);
      const matchesSearch =
        searchTerm.length === 0 ||
        node.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [productsList, selectedCategories, searchTerm]);

  useEffect(() => {
    const filter = document.querySelector(".filter");
    const menu = document.querySelector(".btn");

    document.onclick = (event) => {
      if (event.target !== filter && !filter.contains(event.target)) {
        filter.classList.remove("active");
      }
    };

    menu.onclick = (event) => {
      event.stopPropagation();
      filter.classList.toggle("active");
    };
  }, []);

  const screenCont = useMediaQuery("(min-width: 730px)");

  return (
    <C.Container>
      <C.PageContent
        fd={screenCont ? "row" : "column"}
        position={screenCont ? "" : "absolute"}
      >
        <C.ButtonFilter className="btn" display={screenCont ? "none" : "flex"}>
          <Menu
            sx={{
              fill: "#003e48",
            }}
          />
          <p>Filtros</p>
        </C.ButtonFilter>
        <C.ContainerFilter
          className="filter"
          wd={screenCont ? "200px" : "300px"}
        >
          <TextField
            label="Pesquise aqui"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchTermChange}
            sx={{ marginBottom: "25px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Typography borderBottom={"1px solid #fefefe"} variant="h6">
            Filtros
          </Typography>
          <FormControl>
            {categories.map((category, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0 }}>
                <Checkbox
                  style={{ color: "white" }}
                  checked={selectedCategories.includes(category)}
                  value={category}
                  onChange={handleCategoryChange}
                />
                {category}
              </ListItem>
            ))}
          </FormControl>
        </C.ContainerFilter>
        <C.ContainerList>
          {filteredProducts.map((product) => (
            <C.ContainerProduct key={product.id}>
              <C.Product>
                <img
                  src={product.images[0].asset.url}
                  alt={product.images[0].alt}
                />
                <div>
                  <p>{product.name}</p>
                </div>
              </C.Product>
            </C.ContainerProduct>
          ))}
        </C.ContainerList>
      </C.PageContent>
    </C.Container>
  );
}

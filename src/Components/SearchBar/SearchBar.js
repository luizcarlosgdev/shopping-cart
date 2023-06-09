import React, {useContext, useState} from "react";
import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

function SearchBar() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    
    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        onChange={({target}) => setSearchValue(target.value)}
        className="search-input"
        required //o input não é enviado vazio
      />

      <button onClick={handleSearch} type="submit" className="search-button">
        <FiSearch />
      </button>
    </form>
  );
}

export default SearchBar;

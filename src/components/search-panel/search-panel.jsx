import { useState } from "react";
import "./search-panel.css";

const SearchPanel = ({ onUpdateSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchhUpdate = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
    onUpdateSearch(searchValue);
  };
  return (
    <input
      type='text'
      className='form-control search-input'
      placeholder='Найти сотрудника'
      value={searchValue}
      onChange={onSearchhUpdate}
    />
  );
};

export default SearchPanel;
